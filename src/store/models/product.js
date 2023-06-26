export const product = {
    state:{
        products:[]
    },
    reducers:{
        setProductData(state, product) {
            return {...state, product}
        }
    },
    effects:(dispatch) => ({
        async fetchProducts() {
            const productData = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(productData=> console.log('data',productData)) ;
            this.setProductData(productData);
            // dispatch(product.reducers.setProductData(productData));
        }
    }),
}