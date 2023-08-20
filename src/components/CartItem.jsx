import { useContext } from "react";
import { CartContext} from "../context/CartContext";

const CartItem = ({item}) => {
    const {deleteItem} = useContext(CartContext);
  return (
    <div className='flex max-w-6xl mx-auto justify-between items-center my-10'>
        <img src={item.img} alt={item.name} width='150rem'/>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: {item.quantity * item.price}</p>
        <button className="bg-red-400 px-4 py-2 rounded-full" onClick={() => deleteItem(item.id)}> X </button>
    </div>
  )
}

export default CartItem;