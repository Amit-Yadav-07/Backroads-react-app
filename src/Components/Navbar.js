import { NavLinks } from "./Data";

let Navbar = () => {


    return (
        <header className="header">
            <nav className="nav-container">

                <div className="logo-section">
                    <h2>Backs<span>Roads</span></h2>
                </div>


                <div className="toggle-container">
                    <button className="toggle-btn"><i className="fa-solid fa-bars"></i></button>
                </div>


                <div className="link-container">
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