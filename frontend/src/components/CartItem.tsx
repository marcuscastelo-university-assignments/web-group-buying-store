import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CartProductProps } from '../pages/Cart';
import { MilestoneProps, ProductProps } from '../types';
import { getProduct, removeCartItem, updateCartItem } from '../util/local-storage';
import { calculateRuntimeInfo } from '../util/product-utlls';

function getProductData(product: ProductProps, qttyInCartItem: number) {
    let curItems = product.currentQuantity + qttyInCartItem;
    let maxNearest = { quantity: -1 } as MilestoneProps;
    let nextMaxNearest = { quantity: 99999999999999 } as MilestoneProps;
    for (let milestone of product.milestones) {
        if (milestone.quantity > maxNearest.quantity && milestone.quantity <= curItems) {
            maxNearest = milestone;
        }
    }


    for (let milestone of product.milestones) {
        if ((milestone.quantity < nextMaxNearest.quantity || nextMaxNearest === undefined) && milestone.quantity > maxNearest.quantity) {
            nextMaxNearest = milestone;
        }
    }

    if (maxNearest.price === undefined) maxNearest.price = -1;
    if (nextMaxNearest.price === undefined) nextMaxNearest = { ...maxNearest };

    let currPricePerItem = maxNearest.price;
    let nextPricePerItem = nextMaxNearest.price;
    let remainingToReducePrice = (nextMaxNearest.quantity !== maxNearest.quantity ? nextMaxNearest.quantity - curItems : 0);
    return {
        currPricePerItem,
        nextPricePerItem,
        remainingToReducePrice,
    };
}

type CartItemProps = {
    itemInfo: CartProductProps,
    onChanged: () => void,
}

const CartItem: React.FC<CartItemProps> = ({ itemInfo, onChanged }) => {

    const product = getProduct(itemInfo.productID);
    const [count, setCount] = useState<number>(itemInfo.quantity);

    const runtimeInfo = calculateRuntimeInfo(product);
    const remainingProductQuantity = Math.max(0, (runtimeInfo.lastMilestone?.quantity ?? 0) - product.currentQuantity);

    const history = useHistory();

    useEffect(() => {
        if (count < 1) setCount(1);
        if (count > remainingProductQuantity) setCount(remainingProductQuantity);

        itemInfo.quantity = count;
        updateCartItem(itemInfo);
        onChanged();
    }, [count, itemInfo, onChanged, remainingProductQuantity]);

    const { currPricePerItem, nextPricePerItem, remainingToReducePrice } = getProductData(product, itemInfo.quantity);


    return (
        product === undefined ?
            <h1>
                Error: inconsistent localStorage
        </h1>

            :
            <React.Fragment>

                <div className="card mb-3 mx-auto p-3" style={{ maxWidth: 740 }}>
                    <div className="row g-0">
                        <div className="col-12 col-sm-2 d-flex flex-column">
                            <div className="row text-center">
                                <a href={`/product/${product.productID}`}>
                                    <img style={{ width: 96 }}
                                        src={product.imageURL}
                                        alt={product.title}
                                    />
                                </a>
                            </div>
                            <div className="flex-grow-1">

                            </div>
                            <a href="#0" onClick={(e) => { e.preventDefault(); removeCartItem(product.productID); history.push('/cart') }}>
                                <div className="text-center" style={{ fontSize: '2.5em', color: 'darkred' }} >
                                    <i className="fa fa-trash"></i>
                                </div>
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
                                                data-type="minus" data-field="" onClick={() => setCount(count - 1)}>
                                                <span className="glyphicon glyphicon-minus">-</span>
                                            </button>
                                        </span>
                                        <input key={count} type="text" name="quantity" className="form-control input-number quantity"
                                            defaultValue={count} onBlur={e => setCount(parseInt(e.target.value) || 1)} min="1" max="100" step="0" />
                                        <span className="input-group-btn">
                                            <button type="button" className="quantity-right-plus btn btn-dark btn-number"
                                                data-type="plus" data-field="" onClick={() => setCount(count + 1)}>
                                                <span className="glyphicon glyphicon-plus ">+</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-12">
                                    <div className="row g-0">
                                        <div className="col-12 text-center mt-2">
                                            {count}x R${currPricePerItem}
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="cart-item-total">
                                                R${count * currPricePerItem}
                                            </span>
                                        </div>
                                        <div className="col-12 text-justify">
                                            {
                                                remainingToReducePrice > 0 ?
                                                    <small className="text-muted">Falta(m) {remainingToReducePrice} unidade(s) para o produto abaixar para R${nextPricePerItem} por produto 
                                                        <br /> Nesse caso, você deve pagar, no mínimo, R${runtimeInfo.lastMilestone ? (runtimeInfo.lastMilestone.price * (runtimeInfo.lastMilestone.quantity - product.currentQuantity)) : 'Erro'} para atingir a última meta.
                                                    </small>
                                                    :
                                                    <small className="text-success"> Todas as milestones foram atingidas! o preço atual é {runtimeInfo.currentMilestone?.price ?? NaN} </small>
                                            }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>




            </React.Fragment >
    );
}

export default CartItem;