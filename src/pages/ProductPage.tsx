import { useState, useEffect } from 'react'
import { PRODUCTS_URL } from '../utils'
import { useParams } from 'react-router-dom'
import { ProductInterface } from '../types/interfaces'
import axios from 'axios'

const ProductPage = () => {

  const [product, setProduct] = useState<ProductInterface | null>(null)

  const { id } = useParams()

  useEffect(() =>{
    try {
      const getProduct = async () => {
        const { data } = await axios.get(`${PRODUCTS_URL}/${id}`)
        setProduct(data)
      }
      getProduct()
    } catch (error) {
      console.log(error);
      
    }
  },[])

  return (
    <div className="flex items-center justify-between m-8">
      {product && (
        <div className="w-full h-1/2">
        <div className="flex justify-center h-1/4 pb-4">
          <div className="bg-white rounded-lg mr-4 p-4">
            <img width="250px" src={product.avatar} alt="img"/>
          </div>
          <div className="flex justify-between flex-col">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <h4 className="text-2xl font-semibold">$ {product.price}</h4>
          </div>
        </div>
          <hr/>
          <div id="description">
            <h4 className="text-2xl font-semibold">Description</h4>
            <p>{product.description}</p>
          </div>
      </div>
      )}
    </div>
  )
}

export default ProductPage