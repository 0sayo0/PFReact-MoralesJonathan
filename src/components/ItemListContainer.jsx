import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mock/data";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase"; 

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams()

    // useEffect(() => {
    //     setLoading(true);
    //     getProducts()
    //     .then((res) => {
    //         if(categoryId) {
    //             setProductos(res.filter((item) => item.category === categoryId));
    //         } else {
    //             setProductos(res);
    //         }
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false))
    // }, [categoryId])

    useEffect(() => {
        setLoading(true);
        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos");
        getDocs(coleccionProductos)
        .then((res) => {
            const list = res.docs.map((product) => {
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setProductos(list);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[categoryId])

    return(
        <>
            {
                loading ? <p>Cargando...</p>
                : <div>
                <h1 className="font-semibold text-2xl">{greeting} <span>{ categoryId && categoryId }</span></h1>
                <ItemList 
                    productos={productos}
                />
                </div>
            }
        </>
    )
}

export default ItemListContainer;