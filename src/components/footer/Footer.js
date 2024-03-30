import './style.css';

import langIcon from './../../source/icons/langIcon.svg'
import VK from './../../source/icons/VK.svg'
import Telegram from './../../source/icons/Telegram.svg'
import Whatsapp from './../../source/icons/Whatsapp.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer-raw">
                    <li className="footer-logo">QPICK</li>
                    <li className="footer-nav">
                        <ul className="nav-list">
                            <li className="list-item">
                                <a href="!#">Избранное</a>
                            </li>
                            <li className="list-item"><a href="#!">Корзина</a></li>
                            <li className="list-item">
                                <a href="#!">Контакты</a>
                            </li>
                        </ul>
                    </li>
                    <li className="services">
                        <div className="services-condition">Условия сервиса</div>
                        <div className="languages">
                            <img className="languages-icon" src={langIcon} alt="" />
                            <div className="languages-ru">Рус</div>
                            <div className="languages-eng">Eng</div>
                        </div>
                    </li>

                    <li className="footer-socials">
                        <ul className="socials-list">
                            <li className="socials-item"><a href="https://vk.com/feed">
                                <img src={VK} alt="" />
                            </a></li>
                            <li className="socials-item"><a href="#!">
                                <img src={Telegram} alt="" />
                            </a></li>
                            <li className="socials-item"><a href="#!">
                                <img src={Whatsapp} alt="" />
                            </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;