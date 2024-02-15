import { Tours } from "./Data";
import Title from "./Title";

const Featured = () => {
    return (
        <>
            <section className="featured-container" id="featured">

                <Title title='featured' subTitle='us' />

                <article className="card-container">


                    {Tours.map((cards) => {
                        const { id, title, img, text, date, cost, location, days } = cards;
                        return (
                            <div className="card" key={id}>
                                <div className="card-img">
                                    <img src={img} loading="lazy" alt={title} />
                                    <span className="date">{date}</span>
                                </div>
                                <div className="card-title">
                                    <div className="card-title-inner">
                                        <h4>{title}</h4>
                                        <span>{days}</span>
                                    </div>
                                    <p>{text}</p>
                                    <div className="card-title-inner">
                                        <span>
                                            <i className="fa-solid fa-map-location"></i> <strong>{location}</strong>
                                        </span>
                                        <span>{days}</span>
                                        <span>From ${cost}</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </article>
            </section>

            <div className="all-tours">
                <a href="#featured" className="btn">all tours</a>
            </div>

        </>
    )
}


export default Featured;