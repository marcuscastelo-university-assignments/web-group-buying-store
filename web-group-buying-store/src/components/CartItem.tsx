import React, { useEffect, useState } from 'react';
import { CartProductProps } from '../pages/Cart';

import { ProductProps } from './ProductCard';

const CartItem: React.FC<{ itemInfo: CartProductProps }> = ({ itemInfo }) => {
    const product = JSON.parse(localStorage.getItem('products') ?? '{}')[itemInfo.productID] as ProductProps | undefined;
    const [ count, setCount ] = useState<number>(itemInfo.quantity);

    useEffect(() => {
        if (count < 1) setCount(1)

        //TODO: save new quantity to localstorage

    }, [count]);


    return (
        product === undefined ? 
        <h1>
            Error: inconsistent localStorage
        </h1>

        :
        <React.Fragment>

            <div className="card mb-3 mx-auto" style={{ maxWidth: 740 }}>
                <div className="row g-0">
                    <div className="col-12 col-sm-2 text-center">
                        <a href={`/product/${product.productID}`}>
                            <img style={{ width: 96 }}
                                src={product.imageURL}
                                alt={product.title} />
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text product-desc">{product.description ?? "Sem descrição"}
                            </p>
                            <p className="card-text"><small className="text-muted">Faltam x pessoas para o preço abaixar para y</small></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 p-2 bg-light">
                        <div className="row g-0">
                            <div className="col-12 col-sm-6 col-md-12">
                                <div className="input-group quantity-group mx-auto" style={{ maxWidth: 150 }}>
                                    <div className="col-12">
                                        <label htmlFor="quantity">Quantidade:</label>
                                    </div>
                                    <span className="input-group-btn">
                                        <button type="button" className="quantity-left-minus btn btn-dark btn-number"
                                            data-type="minus" data-field="" onClick={()=>setCount(count-1)}>
                                            <span className="glyphicon glyphicon-minus">-</span>
                                        </button>
                                    </span>
                                    <input key={count} type="text" name="quantity" className="form-control input-number quantity"
                                        defaultValue={count} onBlur={e=>setCount(parseInt(e.target.value) || 1)}  min="1" max="100" step="0" />
                                    <span className="input-group-btn">
                                        <button type="button" className="quantity-right-plus btn btn-dark btn-number"
                                            data-type="plus" data-field="" onClick={()=>setCount(count+1)}>
                                            <span className="glyphicon glyphicon-plus ">+</span>
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-12">
                                <div className="row g-0">
                                    <div className="col-12 text-center mt-2">
                                            {count}x R$200
                                    </div>
                                    <div className="col-12 text-center">
                                        <span className="cart-item-total">
                                            R${count * 2000}
                                        </span>
                                    </div>
                                    <div className="col-12 text-center">
                                        <span className="cart-item-remaining-to-decrease">
                                            Faltam <span className="value">5</span>
                                        </span>
                                        <span className="cart-item-next-value">
                                            itens para o produto abaixar para R$<span className="value">10</span>
                                        </span>
                                        <span className="cart-item-min-next-value">
                                            por produto - para um valor mínimo de R$<span className="value">100</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




        </React.Fragment>
    );
}

export default CartItem;