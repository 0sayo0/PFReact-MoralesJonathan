import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        console.log('compraste...');
    }
    return (
        <>
            <div className="flex flex-col items-center my-10">
                <h3 className="font-semibold text-2xl">Detalle de: {producto.name}</h3>
                <img src={producto.img} alt={producto.name} />
                <p>{producto.description}</p>
                <p>${producto.price}</p>
                <ItemCount 
                    initial={1}
                    stock={producto.stock}
                    onAdd={onAdd}
                />
            </div>
        </>
    )
}

export default ItemDetail;