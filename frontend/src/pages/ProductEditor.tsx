import React, { FormEventHandler, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MilestoneItem from '../components/MilestoneItem';
import { calculateRuntimeInfo } from '../util/product-utlls';
import MilestoneProgressBar from '../components/MilestoneProgressBar';
import { CategoryDescription, DEFAULTS } from '../util/api';
import CategorySelector from '../components/CategorySelector';

import * as API from '../util/api';

import { MilestoneProps, ProductProps, getLoadingProduct } from '../types';
import { getCurrentUserNick, isAdmin, isAuth } from '../util/auth-util';
import { useHistory, useParams } from 'react-router';



const ProductEditor: React.FC = () => {
    const history = useHistory();
    const { id: productId } = useParams<{ id?: string }>();

    let _milesetoneState = useState(-1);
    let [selectedMilestone, selectMilestone] = _milesetoneState;

    let [newQuantity, setNewQuantity] = useState(0);
    let [newPrice, setNewPrice] = useState(0);

    const nick = getCurrentUserNick();
    const user = API.getUser(nick);

    const editing = history.location.pathname.includes('edit');
    const baseProduct = editing ? getLoadingProduct() : 
    {
        title: "",
        milestones: [],
        categoryId: "",
        imageURL: "",
        currentQuantity: 0,
        comments: [],
        description: "",
    };

    const [product, setProduct] = useState<ProductProps>(
        {
            ...baseProduct,
            productId: API.generateProductID(),
            creator: nick,
        }
    );

    function generateDefaultParents(existingProduct?: ProductProps) {
        let categoriesParentsCopy: (string | undefined)[] = new Array(Object.keys(API.getCategories()).length).fill(undefined);
        if (existingProduct) {

            const categoryLayers = API.getCategories();
            const findCategory = (id?: string) => {
                if (!id) return undefined;
                let res;
                for (let layerID of Object.keys(categoryLayers)) {
                    console.log('自殺')
                    console.log(categoryLayers)
                    console.log(layerID)
                    console.log(categoryLayers[layerID])
                    res = categoryLayers[layerID].find(c => c.id === id)
                    if (res) return res;
                }
                return undefined;
            }



            let currentCategory = findCategory(product.categoryId);
            if (!currentCategory) {
                console.error(`Categoria ${product.categoryId} not found!`);
            }
            else while (currentCategory) {
                categoriesParentsCopy.push(currentCategory.id);
                currentCategory = findCategory(currentCategory.parent);
                if (currentCategory?.parent === currentCategory?.id) {
                    console.error('Category is parent of itself??!??!');
                    break;
                }
            }

            categoriesParentsCopy.push(undefined);
            categoriesParentsCopy.reverse();
            console.log(categoriesParentsCopy)

            return categoriesParentsCopy;
        }
        return categoriesParentsCopy;
    }

    let [categoriesParents, setCategoriesParents] = useState<(string | undefined)[]>([]);


    const updateSelectorsBelow = (index: number, chosenCategory: string) => {
        let categoriesParentsCopy = [...categoriesParents];

        if (categoriesParentsCopy.length === 0) return;
        if (categoriesParentsCopy[categoriesParentsCopy.length - 1] !== undefined)
            categoriesParentsCopy.push(undefined);

        for (let i = index + 2; i < categoriesParents.length; i++) {
            categoriesParentsCopy[i] = undefined;
        }
        if (index + 1 < categoriesParents.length) {
            categoriesParentsCopy[index + 1] = chosenCategory;
        }

        setCategoriesParents(categoriesParentsCopy);
    }


    let [productImage, setProductImage] = useState(product.imageURL || DEFAULTS.IMG_DEFAULT);
    let [titleName, setTitleName] = useState(product.title);
    let [descriptionText, setDescriptionText] = useState(product.description)

    useEffect(() => {
        if (productId)
            API.getProduct(productId).then((product) => {
                if (product)
                    setProduct(product);
                else {
                    //Show 404 page
                    history.push('/404');
                }
            })
    }, [productId, history]);


    useEffect(() => {
        setTitleName(product.title);
        setProductImage(product.imageURL);
        setDescriptionText(product.description ?? '');
        setCategoriesParents(generateDefaultParents(product));
    }, [product]);

    if (nick === '' || !user || nick !== product.creator) {
        //Important: do not remove this line (product.creator is undefined even though it should not!)
        return <h1>401 NOT AUTHORIZED</h1>
    }

    const runtimeInfo = calculateRuntimeInfo(product);

    const removeMilestone = (product: ProductProps, milestone: MilestoneProps) => {
        const idx = product.milestones.findIndex(m => m.quantity === milestone.quantity);
        if (idx < 0) return false;

        product.milestones.splice(idx, 1);
        setProduct(product);

        return true;
    }

    const addNewMilestone: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (!product.milestones.find(m => m.quantity === newQuantity)) {
            product.milestones.push({ quantity: newQuantity, price: newPrice })
            setProduct(product);
        }
        selectMilestone(-1);
        setNewPrice(0);
        setNewQuantity(0);
    };

    const removeProduct = () => {
        API.removeProduct(product.productId);
        history.push('/');
    }

    const publishProduct = async () => {
        if (
            titleName === "" ||
            productImage === DEFAULTS.IMG_DEFAULT ||
            descriptionText === "" ||
            product.milestones.length === 0 ||
            categoriesParents[1] === undefined
        ) return console.error('Required values ' + JSON.stringify(product));
        product.title = titleName;
        product.imageURL = productImage;
        product.description = descriptionText;
        for (let i = categoriesParents.length - 1; i >= 0; i--) {
            if (categoriesParents[i] !== undefined) {
                product.categoryId = categoriesParents[i] ?? "";
                break;
            }
        }
        setProduct(product);

        if (editing)
            await API.updateProduct(product);
        else 
            await API.createProduct(product);
        history.push('/');
        return product;
    }



    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />
                {/* {JSON.stringify(categoriesParents)} */}
                <div className="row flex-grow-1 my-4">
                    <div className="col-12">

                        {
                            (isAuth() && (product.creator === getCurrentUserNick())) ?

                                <div className='row g-0'>
                                    <div className='col'>
                                        <a href="#0" onClick={(e) => { e.preventDefault(); removeProduct(); }}>
                                            <div className="text-center" style={{ fontSize: '2.5em', color: 'darkred' }} >
                                                <i className="fa fa-trash"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col'>
                                        <a href="#0" onClick={(e) => { e.preventDefault(); publishProduct(); }}>
                                            <div className="text-center" style={{ fontSize: '2.5em', color: 'blue' }} >
                                                <i className="fa fa-save"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='col'>
                                        <a href="#0" onClick={(e) => { e.preventDefault(); history.goBack() }}>
                                            <div className="text-center" style={{ fontSize: '2.5em', color: 'blue' }} >
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                : ''
                        }



                        <div className="row g-0  ">
                            <div className=" col-10 col-md-8  mx-auto">
                                <div className="row bg-light p-3">
                                    <div className="card col-6 text-center mx-auto py-3">
                                        <div className="card col-12 p-3">
                                            <input value={titleName} onChange={(e) => setTitleName(e.target.value)} className="form-control text-center" required style={{ fontSize: '2em' }} type="text" placeholder="Título do produto" />

                                            <input className="form-control mt-3" name="product-img-inp" id="product-img-inp" type="file" accept="image/*" onChange={(e) => setProductImage(URL.createObjectURL(e.target.files ? e.target.files[0] : '/img/categories/bed'))} />
                                            <img id="product-img-preview" src={productImage} className="card-img-top p-3" alt="..." />
                                            <form className="card-body" onSubmit={(e) => { e.preventDefault(); publishProduct() }}>
                                                <p className="card-text p-0">
                                                    <textarea value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)} className="form-control text-center" required style={{ fontSize: '1.2em' }} placeholder="Descrição do produto"></textarea>
                                                </p>

                                                {categoriesParents.map((parent, idx) => (
                                                    (parent || idx === 0) ? <CategorySelector key={categoriesParents[idx + 1]} layer={'1'.repeat(idx)} categoryId={parent} defaultValue={categoriesParents[idx + 1]} onChange={(chosenCategory) => updateSelectorsBelow(idx, chosenCategory)} />
                                                        : ''
                                                ))}

                                                <input type="submit" className="form-control bg-dark text-white mt-5" value="Publicar" />
                                            </form>
                                        </div>
                                    </div>
                                    <div id="milestone-list" className="col-6 d-flex flex-column">
                                        <div
                                            className={`milestone-item row card mx-auto m-2 p-3 w-100 ${selectedMilestone < 0 ? 'd-flex' : 'd-none'}`}
                                            data-milestone="add"
                                            style={{ order: 0 }}
                                        >
                                            <div className="card-header" onClick={() => selectMilestone(selectedMilestone === -2 ? -1 : -2)}>
                                                Adicionar
                                            </div>
                                            <div className={`card-body ${selectedMilestone === -2 ? 'd-flex' : 'd-none'} flex-column`}>
                                                <form id="milestone-registration-form" onSubmit={addNewMilestone}>
                                                    <div className="row g-1 mt-3">
                                                        <div className="col px-1">
                                                            <input name="product-milestone-qtty" className="new-product-milestone-qtty form-control"
                                                                type="number" placeholder="milestone quantity" value={newQuantity} onChange={(e) => setNewQuantity(parseInt(e.target.value) ?? 0)} />
                                                        </div>
                                                        <div className="col px-1">
                                                            <input name="product-milestone-price" className="new-product-milestone-price form-control"
                                                                type="number" step="0.01" placeholder="milestone price" value={newPrice} onChange={(e) => setNewPrice(parseInt(e.target.value) ?? 0)} />
                                                        </div>
                                                    </div>
                                                    <div className="row g-0 mt-3">
                                                        <input name="product-milestone-submit" className="new-product-milestone-submit form-control bg-dark text-white"
                                                            type="submit" value="Inserir" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <React.Fragment key={product.milestones.length}>
                                            {
                                                product.milestones.map((milestone, idx) => (
                                                    (selectedMilestone === -1 || selectedMilestone === idx) ?
                                                        <MilestoneItem
                                                            milestone={milestone}
                                                            editing={true}
                                                            product={product}
                                                            key={`${idx}`}
                                                            expanded={selectedMilestone === idx}
                                                            onClick={() => selectMilestone(selectedMilestone === idx ? -1 : idx)}
                                                            onRemove={removeMilestone}
                                                        />
                                                        : ''
                                                ))
                                            }
                                        </React.Fragment>

                                        {
                                            product.milestones.length === 0 ?
                                                <span className="w-100 text-center text-danger fw-bold mt-5">Nenhuma milestone foi adicionada ainda</span>
                                                : ""
                                        }
                                    </div>
                                </div>
                            </div>
                            <MilestoneProgressBar product={product} runtimeInfo={runtimeInfo} milestoneState={_milesetoneState} />
                        </div>

                    </div>

                    <div className="row mt-5"></div>
                    <Footer />
                </div >
            </div>
        </React.Fragment >
    );
};

export default ProductEditor;