import Item from "./Item";

const ItemList = ({productos}) => {

    return(
        <>
            <div className="max-w-[85%] mx-auto my-10">
                <div className="flex justify-between">
                    {productos.map((prod) => <Item 
                                                key={prod.id} prod={prod} //Tambien se podria hacer una spread operator de prod
                                            />)}
                </div>
            </div>
        </>
    )
}

export default ItemList;