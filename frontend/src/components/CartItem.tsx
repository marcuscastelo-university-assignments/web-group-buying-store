import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CartProductProps, getLoadingProduct, MilestoneProps, ProductProps } from '../types';
import { getProduct, removeCartItem, updateCartItem } from '../util/api';
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
    onCountChanged: () => void,
    onDeleted: () => void,
}

const CartItem: React.FC<CartItemProps> = ({ itemInfo, onCountChanged, onDeleted }) => {

    const [product, setProduct] = useState(getLoadingProduct());

    const [count, _setCount] = useState<number>(itemInfo.quantity);

    const [runtimeInfo, setRuntimeInfo] = useState(calculateRuntimeInfo(product));
    const [remainingProductQuantity, setRemainingProductQuantity] = useState(0);

    const [ready, setReady] = useState(false);

    const history = useHistory();

    const setCount = (newCount: number) => {
        const oldCount = count;
        newCount = Math.max(0, Math.min(newCount, remainingProductQuantity));
        _setCount(newCount);
        itemInfo.quantity = newCount;
        if (newCount !== oldCount) { onCountChanged(); }
        // updateCartItem(itemInfo);
    }

    useEffect(() => {
        getProduct(itemInfo.productId).then(p => {
            if (p) {
                setProduct(p)
                const newRTI = calculateRuntimeInfo(p);
                setRuntimeInfo(newRTI);
                setRemainingProductQuantity(Math.max(0, (newRTI.lastMilestone?.quantity ?? 0) - p.currentQuantity));
                setReady(true);
            }
        });
    }, [itemInfo.productId]);

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
                                <a href={`/product/${product.productId}`}>
                                    <img style={{ width: 96 }}
                                        src={product.imageURL}
                                        alt={product.title}
                                    />
                                </a>
                            </div>
                            <div className="flex-grow-1">

                            </div>
                            <a href="#0" onClick={async (e) => { e.preventDefault(); await removeCartItem(product.productId); onDeleted(); }}>
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
                                <p className="card-text"><small className="text-muted"></small></p>
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
                                            {count}x {currPricePerItem >= 0 ? `R$${currPricePerItem}` : "--"}
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="cart-item-total">
                                                {(currPricePerItem >= 0) ? `R$${count * currPricePerItem}` : "--"}
                                            </span>
                                        </div>
                                        <div className="col-12 text-justify">
                                            {
                                                currPricePerItem < 0 ?
                                                    <small className="text-muted"> O produto deve atingir a primeira meta para ser vendido, é necessário comprar mais {remainingToReducePrice} unidade(s) para atingir essa meta, na qual o preço é de R${nextPricePerItem}.</small>
                                                    : remainingToReducePrice > 0 ?
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