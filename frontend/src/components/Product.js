import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from "./Rating";
import {Link} from 'react-router-dom'


const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            
            <Link to={`/product/${product._id}`}>
              <Card.Img src={product.image}/>
            </Link>

            <Card.Body>
                <Link style={{textDecoration: 'none'}} to={`/product/${product._id}`}>
                 <Card.Title as="div"><strong>{product.name}</strong></Card.Title> 
                </Link>

                <Card.Text>
                  <div className="my-3">{product.rating} from {product.numReviews} reviews </div>
                </Card.Text>

                <Card.Text as="div">
                  <Rating value={product.rating} text={`${product.numReviews} reviewes`}/>
                </Card.Text>
                
               <Card.Text as="h2">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
        
    )
}

export default Product
