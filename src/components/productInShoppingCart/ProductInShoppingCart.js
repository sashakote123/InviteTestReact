import minus from './../../source/icons/minus.svg'
import plus from './../../source/icons/plus.svg'
import trashCan from './../../source/icons/trashCan.svg'


const ProductInShoppingCart = ({title, imgSmall, price, counter, minusBtn, plusBtn}) => {


    return (
        <li className="cart-item">
            <div className="item-raw-one">
                <div className="item-img">
                    <img src={imgSmall} alt="" />
                </div>
                <div className="raw-btns">
                    <button className="minus-btn" onClick={minusBtn}>
                        <img src={minus} alt="" />
                    </button>
                    <div className="number">{counter}</div>
                    <button className="plus-btn" onClick={plusBtn}>
                        <img src={plus} alt="" />
                    </button>
                </div>
            </div>
            <div className="item-raw-two">
                <div className="item-info">
                    <div className="item-name">{title}</div>
                    <div className="item-price">{price} ₽</div>
                </div>
                <div className="item-final">
                    <button className="delete-btn">
                        <img src={trashCan} alt="" />
                    </button>
                    <div className="item-fullprise">{counter * price} ₽</div>
                </div>
            </div>

        </li>
    );
}

export default ProductInShoppingCart;