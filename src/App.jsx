import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos!' /> }/>
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Bienvenido a la categoria:' /> }/>
        <Route path='/item/:id' element={ <ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
