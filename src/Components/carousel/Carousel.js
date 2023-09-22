import { useState, useEffect } from "react";
import pagess from "./data.js";
import "./style.css";

const Carousel = () => {
    const [pages, setPages] = useState(pagess);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = pages.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, pages])

    // for autoscrolling

    /* useEffect(() => {
        let slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 6000);
        return () => {
            clearInterval(slider);
        }
    }, [currentIndex]) */

    return (
        <section>
            <div className="section-center">
                {pages.map((page, pageIndex) => {
                    const { id, image, title, description } = page;

                    let position = "nextSlide";
                    if (pageIndex === currentIndex) {
                        position = "activeSlide";
                    }

                    if (pageIndex === currentIndex - 1 || (currentIndex === 0 && pageIndex === pages.length - 1)) {
                        position = "lastSlide";
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={title} className="page-img" />
                            <p><strong>{description}</strong></p>
                        </article>
                    )
                })}

                <button className="prev" onClick={() => setCurrentIndex(prevState => prevState - 1)}>
                    v
                </button>
                <button className="next" onClick={() => setCurrentIndex(prevState => prevState + 1)}>
                    v
                </button>
            </div>
        </section>
    );
}

export default Carousel;