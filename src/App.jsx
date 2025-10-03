import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Accueil from "./pages/Accueil.jsx";
import APropos from "./pages/Apropos.jsx";

import Location from './pages/Location.jsx'
import Error from './components/Error/Error.jsx' // ✅ Ajout du composant Error

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<Error />} /> {/* ✅ Page 404 personnalisée */}
       
      </Routes>
    </>
  )
}

export default App

