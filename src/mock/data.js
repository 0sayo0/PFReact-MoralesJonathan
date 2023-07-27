const list = [
    {
        id: '01',
        category: 'nuevos',
        name: 'Smartphone',
        stock: 10,
        price: 15000,
        description: 'Con este Smartphone podras devolverle las llamadas perdidas a tu tia.',
        img: 'https://i.postimg.cc/hvJVqSmd/3.jpg'
    },
    {
        id: '02',
        category: 'ofertas',
        name: 'Laptop',
        stock: 6,
        price: 25000,
        description: 'Diseñada solo para ver series, no corre juegos ni siquiera el Tetris.',
        img: 'https://i.postimg.cc/13MvZXx4/Electro-Pop.jpg'
    },
    {
        id: '03',
        category: 'vendidos',
        name: 'Smartwatch',
        stock: 15,
        price: 5000,
        description: 'Parecido al omnitrix de Ben 10, pero con este serás Ben 100.',
        img: 'https://i.postimg.cc/Pf6Cw8Gd/Electro-Pop2.png'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        let error = false;
        setTimeout(() => {
            if(error){
                reject('No hay data, intente mas tarde');
            } else {
                resolve(list)
            }
        }, 2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(list.find((item) => item.id === id))
        }, 2000);
    })
}