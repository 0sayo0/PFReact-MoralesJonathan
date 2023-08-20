import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({producto}) => {
    const [quantityAdded, setQuantityAdded] = useState('');
    const {addItem} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setQuantityAdded(cantidad);
        addItem(producto, cantidad);
    }
    return (
        <>
            <div className="flex flex-col items-center my-10">
                <h3 className="font-semibold text-2xl">Detalle de: {producto.name}</h3>
                <img src={producto.img} alt={producto.name} />
                <p>{producto.description}</p>
                <p>${producto.price}</p>
                { quantityAdded === '' ? <ItemCount 
                    initial={1}
                    stock={producto.stock}
                    onAdd={onAdd}
                />
                : <Link to="/cart" className="bg-teal-500 hover:bg-teal-600 p-2 my-2 rounded-lg">Ir al Carrito</Link>}
            </div>
        </>
    )
}

export default ItemDetail;