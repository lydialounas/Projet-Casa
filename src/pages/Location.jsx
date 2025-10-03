
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
 import Carrousel from "../components/Carrousel/carrousel.jsx"
import Tags from "../components/Tags/Tags.jsx"
import Host from "../components/Host/Host.jsx"
import Rate from "../components/Rate/Rate.jsx" 
import Collapse from "../components/Collapse/Collapse.jsx"
import "./Location.css"

//composant dynamique :charge les données d'une location en fonction de l'id dans l'URL
function Location() {
    const param = useParams() //Récupère les paramètres d'une URL
    const nav = useNavigate()//Naviguer vers une autre URL (page d'erreur)
    const [locationData, setLocationData] = useState(null) //Stockage réponse API dans le state

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${param.id}`)
            .then((response) => {
                if (!response.ok) {
                    nav("/Error")
                }
                return response.json()
            })
            .then(data => setLocationData(data))
            .catch(error => console.error(error))
    }, [param, nav]) //Tableau de dépendances : useEffect sera exécuté à chaque changement de valeurs

    if (!locationData) { //Si données non chargées :
        return <div>Loading...</div>
    }

    return (
//props vers les composants enfants: Carrousel(enfant) reçois  Tags, Host, Rate, Collapse 
        <div className="location">     
            <Carrousel pictures={locationData.pictures} />
            <div className='location_title_host'>
                <div>
                    <h2 className="location_title">{locationData.title}</h2>
                    <p className="location_location">{locationData.location}</p>
                    <Tags tags={locationData.tags} />
                </div>
                        <div className="location_host_rate">
                    <Host host={locationData.host} />
                    <Rate rate={locationData.rating} />
                </div>
            </div>
            <div className="location_collapse">
                <Collapse
                    title="Description"
                    content={locationData.description}
                />
                <Collapse
                    title="Équipements"
                    content={locationData.equipments}
                />
            </div>
        </div>
    )
}

export default Location
