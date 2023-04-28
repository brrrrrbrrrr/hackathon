import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dish from "./pages/Dish";
import RandomDish from "./components/randomDish/RandomDish";
import Map from "./components/map/Map";
import Home from "./pages/Home";
import LanguageProvider from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/randomDish" element={<RandomDish />} />
          <Route path="/dish/:id" element={<Dish />} />
          {/* <Route path="/" element={} />
        <Route path="/" element={} /> */}
        </Routes>
        {/* <RandomDish />
      <Map /> */}
      </div>
    </LanguageProvider>
  );
}

export default App;
