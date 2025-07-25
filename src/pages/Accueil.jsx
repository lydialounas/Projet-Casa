import Banner from "../components/Banner";
import GalleryCards from "../components/GalleryCards";
import "./Accueil.css";

function Accueil() {
  return (
    <div className="accueil">
      <Banner />
      <GalleryCards />
    </div>
  );
}

export default Accueil;
