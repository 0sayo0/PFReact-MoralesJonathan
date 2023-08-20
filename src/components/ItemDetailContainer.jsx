import { useEffect, useState } from "react";
import { getItem } from "../mock/data";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
    
    const [ producto, setProducto ] = useState({});
    const [loader, setLoader] = useState(false);
    const { id } = useParams();

    // useEffect(() => {
    //     setLoader(true);
    //     getItem(id)
    //     .then((res) => setProducto(res))
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoader(false))
    // }, [])

    useEffect(() => {
        setLoader(true);
        const collectionProd = collection(db, 'productos');
        const referenciaAlDoc = doc(collectionProd, id);
        getDoc(referenciaAlDoc)
        .then((res) => setProducto({id:res.id, ...res.data()}))
        .catch((error) => console.log(error))
        .finally(() => setLoader(false))
    },[])

    return (
        <div>
            { loader ? <p>Cargando...</p>
            : <ItemDetail 
                producto={producto}
            />}
        </div>
    )
}

export default ItemDetailContainer;