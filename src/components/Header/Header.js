import React from "react";
import s from "./Header.module.css"
const Header = () =>{
    return(
        <header className ={s.header}>
            <img className={s.img} src = "https://upload.wikimedia.org/wikipedia/commons/4/47/World_Wide_Web_logo.png" alt='123'></img>
        </header>
    )
}
export default Header;