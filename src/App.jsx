import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonGenerations from "./pages/PokemonGenerations";
import Pokemon from "./pages/Pokemon";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generation/:id" element={<PokemonGenerations />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
