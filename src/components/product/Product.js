
import scoreImg from './../../source/icons/starIcon.svg';

const Product = ({title, img, price, oldPrice, score, buyBtn, inShoppingCart}) => {
    return (
        <li className="product-card">
            <img className="product-img" src={img} alt=""/>
                <div className="product-information">
                    <div className="raw-top">
                        <h3 className="product-title">{title}</h3>
                        <div className="product-price-raw">
                            <div className="product-price">{price} ₽</div>
                            <div className="product-sale">{oldPrice} ₽</div>
                        </div>
                    </div>
                    <div className="raw-bottom">
                        <div className="product-score">
                            <img src={scoreImg} alt="star"/>
                                <div className="product-rate">{score}</div>
                        </div>
                        <button className="buy-btn" onClick={buyBtn}>{inShoppingCart ? 'В корзине' : 'Купить'}</button>
                    </div>
                </div>
        </li>
    );
}

export default Product;