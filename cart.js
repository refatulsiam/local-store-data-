const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product =productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    saveProductToLocalStorage(product,quantity);
    showProduct(product, quantity);
    console.log(product,quantity);
} 
const showProduct = (product,quantity) =>{
        const ul = document.getElementById('product-conatainer')
        const li = document.createElement('li');
        li.innerText = `${product}: ${quantity}`
        ul.appendChild(li);
    }

    const getStoreShoppingCart = ()=> {
        let cart ={};
        const storeCart =localStorage.getItem('cart');
        if(storeCart){
            cart = JSON.parse(storeCart);
        }
        return cart;
    }

const saveProductToLocalStorage =(product, quantity) => {
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoreShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product,quantity);
        showProduct(product,quantity);
    }
}
displayProductsFromLocalStorage();