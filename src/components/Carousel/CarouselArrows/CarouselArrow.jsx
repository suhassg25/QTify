import React, { useState, useEffect } from "react";
import styles from "./CarouselArrows.module.css";
import { useSwiper } from "swiper/react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function CarouselLeftArrow() {
    const swiper = useSwiper();
    const [isStart, setIsStart] = useState(true);

    useEffect(() => {
        const handleChange = () => {
            setIsStart(swiper.isBeginning);
        };
        setIsStart(swiper.isBeginning);
        swiper.on("slideChange", handleChange);
        return () => {
            swiper.off("slideChange", handleChange);
        };
    }, [swiper]);

    return (
        <div className={styles.leftArrow}>
            {!isStart && (
                <KeyboardArrowLeftIcon
                    className={styles.left}
                    onClick={() => swiper.slidePrev()}
                    aria-label="Previous Slide"
                />
            )}
        </div>
    )
}

function CarouselRightArrow() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const handleChange = () => {
            setIsEnd(swiper.isEnd);
        };
        setIsEnd(swiper.isEnd);
        swiper.on("slideChange", handleChange);
        return () => {
            swiper.off("slideChange", handleChange);
        };
    }, [swiper]);


    return (
        <div className={styles.rightNArrow}>

            <KeyboardArrowRightIcon
                className={styles.right}
                onClick={() => !isEnd && swiper.slideNext()}
                aria-label="Next Slide"
                data-cy="carousel-next-button"
                style={{
                    visibility: isEnd ? "hidden" : "visible",
                    pointerEvents: isEnd ? "none" : "auto",
                }}
            />
        </div>
    )
}

export {CarouselRightArrow, CarouselLeftArrow};