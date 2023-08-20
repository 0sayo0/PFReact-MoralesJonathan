import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Bienvenidos!' /> }/>
          <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Bienvenido a la categoria:' /> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
