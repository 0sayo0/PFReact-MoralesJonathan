import ShoppingCart from "./ShoppingCart";

function NavBar() {


    return(
        <>
            <div className="p-5 bg-emerald-300">
                <nav className="flex flex-row justify-evenly items-center">
                    <a href="">
                        <div className="logo flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-play-card" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                                <path d="M8 6h.01" />
                                <path d="M16 18h.01" />
                                <path d="M12 16l-3 -4l3 -4l3 4z" />
                            </svg>
                            <p className="text-2xl text-neutral-500"><span className="text-4xl text-black">Kualli</span> Store</p>
                        </div>
                    </a>
                    <ul className="nav-links flex">
                        <a className="mx-10" href="/">Inicio</a>
                        <a className="mx-10" href="/servicios">Servicios</a>
                        <a className="mx-10" href="/contacto">Contacto</a>
                    </ul>
                    <ShoppingCart />
                </nav>
            </div>
        </>
    )
}

export default NavBar;