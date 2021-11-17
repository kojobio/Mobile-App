const PRODUCTS = [
    {
        id: 100,
        name: 'Cotton Chair',
        price: 200,
        image: require('../assets/products/chair 1.jpg'),
        description: 'comfortable chair for everyone.'

    }, 

    {
        id: 101,
        name: 'wooden chair',
        price: 600,
        image: require('../assets/products/chair 2.jpg'),
        description: 'comfortable chair for any occations'

    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}