import ShoppingCart from "./ShoppingCart";
import { NavLink } from "react-router-dom";

function NavBar() {


    return(
        <>
            <div className="p-5 bg-emerald-300">
                <nav className="flex flex-row justify-evenly items-center">
                    <NavLink to='/'>
                        <div className="logo flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-play-card" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                                <path d="M8 6h.01" />
                                <path d="M16 18h.01" />
                                <path d="M12 16l-3 -4l3 -4l3 4z" />
                            </svg>
                            <p className="text-2xl text-neutral-500"><span className="text-4xl text-black">Kualli</span> Store</p>
                        </div>
                    </NavLink>
                    <ul className="nav-links flex items-center">
                        <NavLink to='/' className="mx-10 text-xl hover:underline">Inicio</NavLink>
                        <div className="flex items-center">
                            <NavLink to='/category/ofertas' className="mx-2 text-sm hover:underline">Ofertas</NavLink>
                            <NavLink to='/category/nuevos' className="mx-2 text-sm hover:underline">Nuevos</NavLink>
                            <NavLink to='/category/vendidos' className="mx-2 text-sm hover:underline">Mas Vendidos</NavLink>
                            <NavLink to='/' className="mx-2 text-sm hover:underline">Todos los Productos</NavLink>
                        </div>
                    </ul>
                    <ShoppingCart />
                </nav>
            </div>
        </>
    )
}

export default NavBar;