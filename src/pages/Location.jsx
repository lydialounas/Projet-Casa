
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
 import Carrousel from "../components/Carrousel"
import Tags from "../components/Tags"
import Host from "../components/Host"
import Rate from "../components/Rate" 
import Collapse from "../components/Collapse"
import "./Location.css"


function Location() {
    const param = useParams() //Récupère les paramètres d'une URL
    const nav = useNavigate()
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
