import React from "react";
import s from "./Nav.module.css"
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.links}>
                <Link className={s.active}  to="/profile">profile</Link>
            </div>
            <div className={s.links}>
                <Link className={s.active}  to="/dialogs">Dialogs</Link>
            </div>
            <div className={s.links}>
                <Link className={s.active} to="/post">Post</Link>
            </div >
            <div className={s.links}>
                <Link className={s.active} to="/Photo">Photo</Link>
            </div>

        </nav>
    )
}
export default Nav;