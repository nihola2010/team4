import React from "react";
import './header.css'
import img1 from '../assets/img1.png'

function Header(){
    return(
        <>
        <nav className="navbar">
                <img src={img1} alt="" />
            <ul className="navbar1">
                <li><a href="">Каталог</a></li>
                <li><a href="">Об амбарной доске</a></li>
                <li><a href="">Наши работы</a></li>
                <li><a href="">О нас</a></li>
                <li><a href="">Блог</a></li>
                <li><a href="">Контакты</a></li>
                <li><a href="">+7 (929) 590 82-87</a></li>
                <button className="btn1">Консультация</button>
            </ul>     
        </nav>
        
        </>
    )
}
export default Header