import React from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

import './MainPage.css'
import ProductCard, { ProductProps } from '../components/ProductCard';

const MainPage: React.FC = () => {

    const carrousels = getGiantDataBlob();

    return (
        <React.Fragment>
            <NavBar />

            {/* <div className="row">
                <nav className="col-9 mx-auto mt-3" id="categories">
                </nav>
            </div>

            <div className="row mt-5">
                <div className="col-9 mx-auto mt-5" id="sales">
                </div>
            </div> */}


            <div className="row mt-5 flex-grow-1">
                <div className="col-9 mx-auto mt-5">
                    <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                        <h4 className="mt-5 w-100 text-center">Interesses</h4>
                        <div className="col-9 mx-auto w-100">
                            <Carousel<ProductProps> carouselID="test123" carouselItemsInfo={carrousels[0].items} itemsPerPage={carrousels[0].itemsPerPage} component={ProductCard} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment >
    )
};


function getGiantDataBlob() {
    return [
        {
            "itemsPerPage": 2,
            "title": "Interesses",
            "items": [
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
                { "currentQuantity": 3, "milestones": [{ "quantity": 3, "price": 25 }, { "quantity": 6, "price": 15 }], "title": "item0", "productID": 12, "imageURL": "https://picsum.photos/200" },
            ]
        },
    ]
}


export default MainPage;