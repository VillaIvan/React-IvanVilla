import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a nuestro eCommerce" />
              }
            />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />

            <Route
              path="*"
              element={<h4>Error 404. Contacte al Administrador</h4>}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
