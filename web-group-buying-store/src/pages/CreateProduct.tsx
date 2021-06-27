import React, { FormEventHandler, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ProductProps } from '../components/ProductCard';
import MilestoneItem from '../components/MilestoneItem';
import { calculateRuntimeInfo } from '../util/product-utlls';
import MilestoneProgressBar from '../components/MilestoneProgressBar';
import { LayerDescription } from '../util/mock-categories';
import CategorySelector from '../components/CategorySelector';
import { getCategories, getCategoryInLayer } from '../util/local-storage';



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
        lastCategory: "",
        imageURL: "",
        currentQuantity: 1,
        productID: '',
        comments: [],
        description: ""

    });



    const runtimeInfo = calculateRuntimeInfo(product);

    const addNewMilestone: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        for (let milestone of product.milestones) {
            if (milestone.quantity === newQuantity) return;
        }

        product.milestones.push({ quantity: newQuantity, price: newPrice })
        setProduct(product);
        selectMilestone(-1);
        setNewPrice(0);
        setNewQuantity(0);
    };

    const publishProduct = () => {

    }
 
    let [ categoriesParents, setCategoriesParents] = useState<(string | undefined)[]>(Object.keys(getCategories()).map(a => undefined));

    const updateSelectorsBelow = (index: number, chosenCategory: string) => {
        console.log('to sendo chamcado ' + chosenCategory)

        let categoriesParentsCopy = [...categoriesParents];

        for (let i = index + 2; i < categoriesParents.length; i++) {
            categoriesParentsCopy[i] = undefined;
        }
        if (index+ 1 < categoriesParents.length){
            categoriesParentsCopy[index + 1] = chosenCategory;
        }

        setCategoriesParents(categoriesParentsCopy);
    }

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
                                            <input className="form-control text-center" required style={{ fontSize: '2em' }} type="text" placeholder="Título do produto" />

                                            <input className="form-control mt-3" name="product-img-inp" id="product-img-inp" type="file" accept="image/*" />
                                            <img id="product-img-preview" src="https://www.mepal.com/en/604/0/0/1/ffffff00/c7f95583/804ad0799752a78eb4aa8a7e32ab0714eb1020bd1940397a16d6903d353aca89/water-bottle-ellipse-500ml-white.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text p-0">
                                                    <textarea className="form-control text-center" required style={{ fontSize: '1.2em' }} placeholder="Descrição do produto"></textarea>
                                                </p>

                                                {categoriesParents.map((parent, idx) => (
                                                    (parent || idx===0 ) ? <CategorySelector layer={'1'.repeat(idx)} categoryID={parent} onChange={(chosenCategory) => updateSelectorsBelow(idx, chosenCategory)} />
                                                    : ''
                                                ))}

                                                <input type="submit" className="form-control bg-dark text-white mt-5" value="Publicar" />
                                            </div>
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