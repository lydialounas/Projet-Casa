import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Location from './pages/Location'
import Error from './components/Error' // ✅ Ajout du composant Error

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<Error />} /> {/* ✅ Page 404 personnalisée */}
        <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  )
}

export default App

