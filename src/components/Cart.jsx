import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const{cart, clear, total} = useContext(CartContext);
  return (
    <div>
        {cart.length
        ? <div>
            {cart.map((item) => <CartItem key={item.id} item={item}/>)}
            <p>Total a pagar: ${total()}</p>
            <div>
                <button className="bg-red-400 hover:bg-red-500 p-2 rounded-lg" onClick={clear}>Vaciar carrito</button>
                <Link className="text-white bg-neutral-700 hover:bg-black p-2 rounded-lg" to='/checkout'>Terminar comprar</Link>
            </div>
        </div>
        : <div>
            <h3 className="my-4">tu carrito esta vacio! </h3>
            <Link to='/' className="bg-teal-500 hover:bg-teal-600 p-2 rounded-lg">Ir a comprar</Link>
          </div>}
    </div>
  )
}

export default Cart;