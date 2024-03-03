import { useRef } from "react";
import { NavLinks } from "./Data";
import { useState } from "react";

let Navbar = () => {

    let [icon, setIcon] = useState(false);
    let [link, setLink] = useState(false);


    let ClickHandler = () => {
        setLink(!link)
        setIcon(!icon)
    }



    return (
        <header className="header">
            <nav className="nav-container">

                <div className="logo-section">
                    <h2>Backs<span>Roads</span></h2>
                </div>


                <div className="toggle-container">
                    <button className="toggle-btn" onClick={ClickHandler}><i className={icon ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i></button>
                </div>


                <div className={link ? 'link-container active' : 'link-container'}>
                    <ul className="links-section">
                        {NavLinks.map((link) => {
                            let { id, href, text } = link;
                            return (<li key={id}><a href={href}>{text}</a></li>)
                        })}
                    </ul>
                </div>

            </nav>
        </header>
    )

}


export default Navbar;