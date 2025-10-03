import { useState } from "react"
import arrow_next from "../../assets/arrow_next_carrousel.png"
import arrow_back from "../../assets/arrow_back_carrousel.png"
import "./Carrousel.css"


function Carrousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0) //Initialisation du state à 0

    // Défilement photo précédente : 
    const previousSlide = () => {
        setCurrentSlide(currentSlide - 1)
        if (currentSlide <= 0) {
            setCurrentSlide(pictures.length - 1)
        }
    }

    // Défilement photo suivante :
    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
        if (currentSlide >= pictures.length - 1) {
            setCurrentSlide(0)
        }
    }

    const pagination = `${currentSlide + 1}/${pictures.length}`
    const alt = "photo du logement"

    return (
        <div>
            {pictures.length > 1 && ( // Conditions : si nombre photos du logement >1, on affiche les flèches du carrousel et la pagination :
                <div className="carrousel">
                    <img src={arrow_back} alt="Flèche gauche" onClick={previousSlide} className="carrousel_arrow_back" />
                    <img src={pictures[currentSlide]} alt={alt} className="carrousel_img" />
                    <div className="carrousel_pagination">{pagination}</div>
                    <img src={arrow_next} alt="Flèche droite" onClick={nextSlide} className="carrousel_arrow_next" />
                </div>
            )}

            {pictures.length === 1 && // Si 1 seule photo, on n'affiche ni flèches du carrousel, ni pagination :
                <img src={pictures[0]} className="carrousel_img" alt={alt} />
            }
        </div>
    )
}

export default Carrousel