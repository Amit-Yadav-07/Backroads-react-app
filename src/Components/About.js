import aboutImg from "../images/about-section-img.jpeg";
import Title from './Title.js';


const About = () => {

    return (
        <>
            {/* <!-- about section start --> */}
            <section className="about-container" id="about">
                <Title title='about' subTitle='us' />

                <div className="about-parent">
                    <article className="about-img-section">
                        <img src={aboutImg} alt="about-mountains" />
                    </article>
                    <article className="about-text-section">
                        <h3>explore the difference</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rem qui. Veritatis atque quos neque
                            sit tenetur illo corporis libero?</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore est magnam deserunt, dolores totam
                            nam corrupti autem ea reprehenderit iure?</p>
                        <br />
                        <a href="#about" className="btn">Read More</a>
                    </article>
                </div>
            </section>
            {/* <!-- about section end --> */}

        </>
    )
}


export default About;