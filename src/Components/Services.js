import Title from "./Title";

import { ServicesItem } from "./Data";

const Services = () => {
    return (
        <>

            <section className="service-container" id="services">

                <Title title='our' subTitle='services' />

                <div className="service-parent">


                    {ServicesItem.map((items) => {
                        const { id, icon, title, text } = items;
                        return (

                            <div className="service-box" key={id}>
                                <div className="service-item-container">
                                    <article className="service-icon">
                                        <i className={icon}></i>
                                    </article>
                                    <article className="service-description">
                                        <h4>{title}</h4>
                                        <p>{text}</p>
                                    </article>
                                </div>
                                <div />
                            </div>

                        )

                    })}
                </div >
            </section >
            {/* <!-- our services section end --> */}
        </>
    )
}


export default Services;