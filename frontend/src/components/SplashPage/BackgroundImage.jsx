import { useState, useEffect } from "react";
import * as Splashcss from "./splashpage.css"
import julia from "../../assets/julia.jpg"
import alexbackground from "../../assets/alexbackground.png"
import splashresized from "../../assets/splashresized.jpg"
import singlesplash from "../../assets/singlesplash.jpg"

const BackgroundImage = () => {
    const [currentImgIdx, setCurrentImgIdx] = useState(0)

    const images = [
        julia,
        splashresized,
        alexbackground
    ]

    const smallerImages = [
        singlesplash,
        splashresized,
        singlesplash
    ]

    useEffect(() => {
        const backgroundInterval = setInterval(() => {
            if (currentImgIdx < images.length - 1) {
                setCurrentImgIdx(currentImgIdx + 1)
            } else {
                setCurrentImgIdx(0)
            }
        }, 3000)
        return () => clearInterval(backgroundInterval)
    }, [currentImgIdx])

    return (
        <>
            <img src={images[currentImgIdx]} id="background-image" alt="background"></img>
            <img src={smallerImages[currentImgIdx]} id="small-background-image" alt="background"></img>
        </>
    );
};
export default BackgroundImage;