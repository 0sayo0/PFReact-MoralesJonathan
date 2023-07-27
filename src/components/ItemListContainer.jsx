import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../mock/data";
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        getProducts()
        .then((res) => {
            if(categoryId) {
                setProductos(res.filter((item) => item.category === categoryId));
            } else {
                setProductos(res);
            }
        })
        .catch((error) => console.log(error))
    }, [categoryId])


    return(
        <>
            <div>
                <h1 className="font-semibold text-2xl">{greeting} <span>{ categoryId && categoryId }</span></h1>
                <ItemList 
                    productos={productos}
                />
            </div>
        </>
    )
}

export default ItemListContainer;