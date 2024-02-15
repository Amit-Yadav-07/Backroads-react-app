import { GalleryImg } from "./Data";

const Gallery = () => {
    return (
        <section className="latest-info-container" id="gallery">
            <article className="latest-parent">
                <div className="email-section">
                    <h4>Want Latest Tour Info And Updates?</h4>
                    <p>Sign up for newsletter and stay up to date</p>
                </div>
                <form className="email-input">
                    <input type="email" placeholder="Your Email" />
                    <a href="#home" className="btn">Submit</a>
                </form>
            </article>

            <article className="gallery-img-container">
                {GalleryImg.map((items) => {
                    let { id, img } = items;

                    return (
                        <div className="gallery-item" key={id}>
                            <img src={img} loading="lazy" alt="gallery-1" />
                            <div className="gallery-shadow"></div>
                        </div>
                    )
                })}
            </article>

        </section>
    )
}


export default Gallery;