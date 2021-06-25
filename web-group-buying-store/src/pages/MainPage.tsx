import React, { MouseEvent } from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

import './MainPage.css'
import ProductCard, { ProductProps } from '../components/ProductCard';
import Category from '../components/Category';
import CategoryLayer from '../components/CategoryLayer';

import $ from 'jquery'


//Got from 'https://icons8.com/icon/set/household/wired--black'
//TODO: mention icons8 in some place (credits)
import BED from '../assets/bed.png'

const MainPage: React.FC = () => {

    const productMap = JSON.parse(localStorage.getItem('products') ?? '{}');
    const products = Object.values(productMap) as ProductProps[];

    const hideNonRoot = () => {
        let layers = $('#categories').find(".layer[data-layer]:not([data-layer='1']")
        layers.addClass('d-none');
        layers.find('.category').addClass('d-none');
        $('#carousel-layer-row').addClass('d-none');

    }

    const genShowDescendents = (parentId: string) => (e: any) => {
        let self = $(`#${parentId}`);
        let selfLayer = self.parent().parent().attr('data-layer');
        let targetRemoveLayerNum = selfLayer + '1';

        let targetRemoveLayer = $(`#categories .layer[data-layer^=${targetRemoveLayerNum}]`);
        targetRemoveLayer.addClass('d-none');
        targetRemoveLayer.find('.category').addClass('d-none');

        let targets = $('#categories [data-parent="' + self.attr('id') + '"]');
        let targetLayers = targets.parent().parent();
        targetLayers.removeClass('d-none');
        targets.removeClass('d-none');

        if (!self.hasClass('parent')) {
            $('#carousel-layer-row').removeClass('d-none');
        }
        else {
            $('#carousel-layer-row').addClass('d-none');
        }

    }



    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">

                <NavBar />

                <div className="row">
                    <nav className="col-9 mx-auto mt-3" id="categories" onMouseLeave={hideNonRoot}>

                        <CategoryLayer className="parent" layer="1" onMouseLeave={hideNonRoot}>
                            <Category onMouseOver={genShowDescendents("test11")} layer="1" id="test11" parent="none" subcategory imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test12")} layer="1" id="test12" parent="none" subcategory imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test13")} layer="1" id="test13" parent="none" subcategory imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test14")} layer="1" id="test14" parent="none" subcategory imageSrc={BED} />
                        </CategoryLayer>

                        <CategoryLayer className="parent" layer="11" onMouseLeave={hideNonRoot}>
                            <Category onMouseOver={genShowDescendents("test21")} layer="11" id="test21" parent="test11" subcategory imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test22")} layer="11" id="test22" parent="test12" subcategory imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test23")} layer="11" id="test23" parent="test13" subcategory={false} imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test24")} layer="11" id="test24" parent="test14" subcategory={false} imageSrc={BED} />
                        </CategoryLayer>

                        <CategoryLayer layer="111" onMouseLeave={hideNonRoot}>
                            <Category onMouseOver={genShowDescendents("test31")} layer="111" id="test31" parent="test21" subcategory={false} imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test32")} layer="111" id="test32" parent="test21" subcategory={false} imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test33")} layer="111" id="test33" parent="test21" subcategory={false} imageSrc={BED} />
                            <Category onMouseOver={genShowDescendents("test34")} layer="111" id="test34" parent="test22" subcategory={false} imageSrc={BED} />
                        </CategoryLayer>

                        <div className="row layer carousel-container" id="carousel-layer-row" data-layer="1111" onMouseLeave={hideNonRoot}>
                            <Carousel<ProductProps> carouselID="category-carousel" carouselItemsInfo={products} itemsPerPage={5} component={ProductCard} />
                        </div>
                    </nav>
                </div>

                {/* 

            <div className="row mt-5">
                <div className="col-9 mx-auto mt-5" id="sales">
                </div>
            </div> */}


                <div className="row mt-5 flex-grow-1">
                    <div className="col-9 mx-auto mt-5">
                        <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                            <h4 className="mt-5 w-100 text-center">Interesses</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="test123" carouselItemsInfo={products} itemsPerPage={5} component={ProductCard} />
                            </div>
                        </div>

                        <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                            <h4 className="mt-5 w-100 text-center">Para você</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="test123" carouselItemsInfo={products} itemsPerPage={5} component={ProductCard} />
                            </div>
                        </div>

                        <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                            <h4 className="mt-5 w-100 text-center">Próximos de esgotar</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="test1223" carouselItemsInfo={products} itemsPerPage={1} component={ProductCard} />
                            </div>
                        </div>

                        <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                            <h4 className="mt-5 w-100 text-center">Em promoção</h4>
                            <div className="col-9 mx-auto w-100">
                                <Carousel<ProductProps> carouselID="test123" carouselItemsInfo={products} itemsPerPage={5} component={ProductCard} />
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