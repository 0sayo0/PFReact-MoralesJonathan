import { useState } from 'react';

const ItemCount = ({stock, onAdd, initial}) => {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    const restar = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    return(
        <>  
            <div className="flex flex-col items-center">
                <div>
                    <button className="bg-teal-500 hover:bg-teal-600 transition-all py-2 px-3 rounded-md" onClick={restar}>-</button>
                    <span className="p-3">{count}</span>
                    <button className="bg-teal-500 hover:bg-teal-600 transition-all py-2 px-3 rounded-md" onClick={sumar}>+</button>
                </div>
                <button
                    className={`bg-teal-500 transition-all p-2 rounded-md mt-2 ${count === 0 ? 'opacity-50' : 'opacity-100 hover:bg-teal-600'}`}
                    disabled={count === 0}
                    onClick={() => onAdd(count)}
                >Comprar</button>
            </div>
        </>
    )
}

export default ItemCount;