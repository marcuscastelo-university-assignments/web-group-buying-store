import React, { useState } from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

import './MainPage.css'
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';
import CategoryLayer from '../components/CategoryLayer';

import { CategoryDescription, CategoryLayersDescription } from '../util/mock-categories';
import { getProducts } from '../util/local-storage';
import { ProductProps } from '../types';


const MainPage: React.FC = () => {

    let [ categoryHistory ] = useState<{ [layer: string]: string }>({})
    const [selectedCategory, setSelectedCategory] = useState<CategoryDescription | undefined>(undefined);
    const productList = Object.values(getProducts()) as ProductProps[];

    const categoryLayers = JSON.parse(localStorage.getItem('categories') ?? '{}') as CategoryLayersDescription;

    const isLayerUp = (layerID: string) => (layerID.length <= (selectedCategory?.layer.length ?? 0));
    const shouldOpenNextLayer = (layerID: string) => layerID.length === ((selectedCategory?.layer.length ?? 0) + 1) && !selectedCategory?.final

    function generateCategoriesInLayer(layerID: string) {
        const categoriesInLayer = categoryLayers[layerID];
        return (<>
            { categoriesInLayer.map((category, idx) => (
                (
                    layerID === '1' ||
                    ( layerID.length <= (selectedCategory?.layer.length ?? 0) && (category.parent === categoryHistory[layerID]) )
                    || category.parent === selectedCategory?.id
                )
                    ?
                    <Category
                        layer={layerID}
                        onMouseOver={(e) => {
                            categoryHistory[layerID] = category.parent ?? '';
                            let curId = layerID + '1';
                            while (categoryHistory[curId]) {
                                categoryHistory[curId] = '';
                                curId += '1';
                            }
                            if (selectedCategory?.id !== category.id)
                                setSelectedCategory(category);
                        }}
                        id={category.id}
                        parent={category.parent ?? 'none'}
                        subcategory={!category.final}
                        imageSrc={category.imageSrc}
                    />
                    : ''
            ))
            }
        </>)
    }


    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">

                <NavBar />

                <div className="row">
                    <nav className="col-9 mx-auto mt-3" id="categories"
                        onMouseLeave={() => {
                            setSelectedCategory(undefined)
                            let curId = '11';
                            while (categoryHistory[curId]) {
                                categoryHistory[curId] = '';
                                curId += '1';
                            }
                        }}
                    >

                        {
                            Object.keys(categoryLayers).map(layerID => (
                                (isLayerUp(layerID) || shouldOpenNextLayer(layerID)) ?
                                    <CategoryLayer layer={layerID}
                                        onMouseLeave={() => {

                                        }}
                                    >
                                        {
                                            (
                                                (
                                                    (layerID.length <= (selectedCategory?.layer.length ?? 0)) ||
                                                    (
                                                        layerID.length === ((selectedCategory?.layer.length ?? 0) + 1) &&
                                                        !selectedCategory?.final
                                                    )
                                                )
                                            )
                                                ? generateCategoriesInLayer(layerID) : ''
                                        }
                                    </CategoryLayer>
                                    : ''
                            ))
                        }

                        <div className="row layer carousel-container" id="carousel-layer-row" data-layer="1111">
                            {
                                (selectedCategory?.final) ?
                                    <Carousel<ProductProps>
                                        carouselID="category-carousel"
                                        carouselItemsInfo={productList.filter(p => p.category === selectedCategory.id)}
                                        itemsPerPage={5} component={ProductCard} />
                                    : ''
                            }
                        </div>
                    </nav>
                </div>

                <div className="row my-5 flex-grow-1">
                    <div className="col-9 mx-auto mt-5">
                        <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                            <h4 className="mt-5 w-100 text-center">Interesses</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="o" carouselItemsInfo={productList} itemsPerPage={5} component={ProductCard} />
                            </div>
                        </div>

                        <div className="row layer  carousel-container mt-2" id="carousel-sale-1-row">
                            <h4 className="mt-5 w-100 text-center">Para você</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="AA" carouselItemsInfo={productList} itemsPerPage={5} component={ProductCard} />
                            </div>
                        </div>

                        <div className="row layer  carousel-container mt-2" id="carousel-sale-2-row">
                            <h4 className="mt-5 w-100 text-center">Próximos de esgotar</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="BB" carouselItemsInfo={productList} itemsPerPage={1} component={ProductCard} />
                            </div>
                        </div>

                        <div className="row layer  carousel-container mt-2" id="carousel-sale-3-row">
                            <h4 className="mt-5 w-100 text-center">Em promoção</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="CC" carouselItemsInfo={productList} itemsPerPage={5} component={ProductCard} />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </React.Fragment >
    )
};

export default MainPage;