import { useState, useContext } from "react";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { CartContext } from "../context/CartContext";

const Checkout = () => {

    const [user, setUser] = useState({});
    const [validateEmail, setValidateEmail] = useState('');
    const [orderId, setOrderId] = useState('');
    const {cart, total, clear} = useContext(CartContext);

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault();

        if(!user.name && user.phone) {
            alert('Completa los campos');
        } else {
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders");
            addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        }
    }

  return (
    <div>
        {orderId !== '' 
        ? <div>
            <h2 className="text-4xl">Su orden fue agregada con exito!</h2>
            <h5 className="text-4xl">Su id de registro es: {orderId}</h5>
        </div>
        :   <div>
                <h2>Terminar compra</h2>
                <h5>Por favor llenar con sus datos</h5>
                <form className="max-w-6xl mx-auto my-10" onSubmit={finalizarCompra}>
                    <div className="mb-5">
                        <label className="">Nombre Completo</label>
                        <input className="w-full border p-1" onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name'/>
                    </div>
                    <div className="mb-5">
                        <label className="">Numero de Telefono</label>
                        <input className="w-full border p-1" onChange={datosComprador} type='number' placeholder='+52 1 30659256' name='phone'/>
                    </div>
                    <div className="mb-5">
                        <label className="">Direccion de Email</label>
                        <input className="w-full border p-1" onChange={datosComprador} type='email' placeholder='correro@correo.com' name='mail'/>
                    </div>
                    <div className="mb-5">
                        <label className="">Repita su Email</label>
                        <input className="w-full border p-1" type='email' placeholder='correro@correo.com' name='mail'onChange={((e) => setValidateEmail(e.target.value))}/>
                    </div>
                    <button className={`bg-teal-500 p-2 rounded-lg ${validateEmail !== user.mail ? "opacity-50" : "opacity-100 hover:bg-teal-600" }`} type='submit' disabled={validateEmail !== user.mail}>Generar Orden</button>
                </form>
            </div>}
    </div>
  )
}

export default Checkout;