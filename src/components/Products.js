import React from 'react';
import { Grid }from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://cdn.flightclub.com/750/TEMPLATE/141219/1.jpg'},
    { id: 2, name: 'Purse', description: 'Chanel', price: '$10', image: 'https://i.pinimg.com/originals/8e/15/22/8e15225c2a5c5ef0faaed20a89ec52db.jpg'}
]


const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
