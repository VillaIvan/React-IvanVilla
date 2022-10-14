import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenidos a nuestro eCommerce" />
            }
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={<h4>Error 404. Contacte al Administrador</h4>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
