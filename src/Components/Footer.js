import { NavLinks } from "./Data";

const Footer = () => {

    return (
        <footer className="footer-container">
            <ul className="footer-links">
                {NavLinks.map((link) => {
                    let { id, href, text } = link;
                    return (<li key={id}><a href={href}>{text}</a></li>)
                })}
            </ul>
            <div className="social-icon">
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com" style={{ margin: '0px 15px' }}><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.twitter.com"><i className="fa-brands fa-squarespace"></i></a>
            </div >
            <div className="copy-write">
                <p>Copyright © Backroads Travel Tours Company <span className="year">{new Date().getFullYear()}</span>. All Rights Reserved</p>
            </div>
        </footer >
    )
}


export default Footer;