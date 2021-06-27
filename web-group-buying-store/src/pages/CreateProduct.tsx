import React, { FormEventHandler, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ProductProps } from '../components/ProductCard';
import MilestoneItem from '../components/MilestoneItem';
import { calculateRuntimeInfo } from '../util/product-utlls';
import MilestoneProgressBar from '../components/MilestoneProgressBar';
import { LayerDescription } from '../util/mock-categories';
import CategorySelector from '../components/CategorySelector';
import { getCategories, getCategoryInLayer, getProducts, updateProduct, updateProducts } from '../util/local-storage';


const PREVIEW_DEFAULT = 'https://www.penworthy.com/Image/Getimage?id=C:\\Repositories\\Common\\About%20Us\\Slide1.jpg';

const CreateProductPage: React.FC = () => {
    let _milesetoneState = useState(-1);
    let [selectedMilestone, selectMilestone] = _milesetoneState;

    let [newQuantity, setNewQuantity] = useState(0);
    let [newPrice, setNewPrice] = useState(0);

    const [product, setProduct] = useState<ProductProps>({
        title: "",
        milestones: [
            { quantity: 3, price: 10 },
            { quantity: 8, price: 8 },
            { quantity: 15, price: 5 },
        ],
        category: "",
        imageURL: "",
        currentQuantity: 0,
        productID: '-1',
        comments: [],
        description: ""
    });

    const runtimeInfo = calculateRuntimeInfo(product);

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

    const publishProduct : FormEventHandler = (e) => {
        e.preventDefault();
        if (
            titleName === "" ||
            productImage === PREVIEW_DEFAULT ||
            descriptionText === "" ||
            product.milestones.length === 0 ||
            categoriesParents[1] === undefined
        ) return console.error('Required values ' + JSON.stringify(product));
        product.title = titleName;
        product.productID = (parseInt(localStorage.getItem('last-id') ?? '0') + 1).toString();
        localStorage.setItem('last-id', product.productID);
        product.imageURL = productImage;
        product.description = descriptionText;
        for(let i=categoriesParents.length - 1;i>=0;i--){
            if(categoriesParents[i] !== undefined) product.category = categoriesParents[i] ?? ""; 
        }
        setProduct(product);
        updateProduct(product);
        return product
    }

    let [categoriesParents, setCategoriesParents] = useState<(string | undefined)[]>(Object.keys(getCategories()).map(a => undefined));

    const updateSelectorsBelow = (index: number, chosenCategory: string) => {

        let categoriesParentsCopy = [...categoriesParents];

        for (let i = index + 2; i < categoriesParents.length; i++) {
            categoriesParentsCopy[i] = undefined;
        }
        if (index + 1 < categoriesParents.length) {
            categoriesParentsCopy[index + 1] = chosenCategory;
        }

        setCategoriesParents(categoriesParentsCopy);
    }

    let [productImage, setProductImage] = useState('https://www.penworthy.com/Image/Getimage?id=C:\Repositories\Common\About%20Us\Slide1.jpg');
    const inputRef = useRef<any>()
    let [titleName, setTitleName] = useState('');
    let [descriptionText, setDescriptionText] = useState('')
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1 my-4">
                    <div className="col-12">
                        <div className="row g-0  ">
                            <div className=" col-10 col-md-8  mx-auto">
                                <div className="row bg-light p-3">
                                    <div className="card col-6 text-center mx-auto py-3">
                                        <div className="card col-12 p-3">
                                            <input value={titleName} onChange={(e) => setTitleName(e.target.value)} className="form-control text-center" required style={{ fontSize: '2em' }} type="text" placeholder="Título do produto" />

                                            <input className="form-control mt-3" name="product-img-inp" id="product-img-inp" type="file" accept="image/*" onChange={(e) => setProductImage(URL.createObjectURL(e.target.files ? e.target.files[0] : '/img/categories/bed'))} />
                                            <img id="product-img-preview" src={productImage} className="card-img-top" alt="..." />
                                            <form className="card-body" onSubmit={publishProduct}>
                                                <p className="card-text p-0">
                                                    <textarea value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)} className="form-control text-center" required style={{ fontSize: '1.2em' }} placeholder="Descrição do produto"></textarea>
                                                </p>

                                                {categoriesParents.map((parent, idx) => (
                                                    (parent || idx === 0) ? <CategorySelector layer={'1'.repeat(idx)} categoryID={parent} onChange={(chosenCategory) => updateSelectorsBelow(idx, chosenCategory)} />
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
                                                            product={product}
                                                            key={`${idx}`}
                                                            expanded={selectedMilestone === idx}
                                                            onClick={() => selectMilestone(selectedMilestone === idx ? -1 : idx)}
                                                        />
                                                        : ''
                                                ))
                                            }
                                        </React.Fragment>

                                        {
                                            runtimeInfo.nextMilestone === null ?
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

export default CreateProductPage;