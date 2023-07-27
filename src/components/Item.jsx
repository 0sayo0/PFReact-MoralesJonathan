import { Link } from "react-router-dom";

const Item = ({prod}) => {
  return (
    <>
        
        <div className="max-w-sm rounded-lg shadow bg-neutral-800 border-2 border-teal-500">
            <a href="#">
                <img className="rounded-t-lg" src={prod.img} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{prod.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400">{prod.description}</p>
                <p className="mb-3 font-bold text-xl text-gray-400">{`$${prod.price}`}</p>
                <Link to={`/item/${prod.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:ring-4 focus:outline-none bg-teal-500 hover:bg-teal-600 focus:ring-teal-800 transition-all">
                    Leer Mas
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

    </>
  )
}

export default Item;