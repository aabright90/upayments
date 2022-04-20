import { FC } from 'react'
import { ProductProps } from '../../../types/interfaces'
import { Link } from 'react-router-dom'

const Product: FC <ProductProps>  = ({ name, avatar, price, id }) => {  
 
  return (
    <Link id="product" to={`product/${id}`} className="flex items-center justify-around flex-col bg-white shadow-lg lg:w-36 rounded">
      <img width="175px" src={avatar}/>
      <div>
        <h4>{name}</h4>
        <h5>$ {price}</h5>
      </div>
    </Link>
  )
}

export default Product