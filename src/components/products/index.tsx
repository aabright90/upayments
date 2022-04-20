import { useState, useEffect } from 'react'
import Product from "./components/Product"
import axios from "axios"
import { PRODUCTS_URL } from '../../utils'
import { ProductInterface } from '../../types/interfaces'
import { useCategoryContext } from '../../contexts/CategoryContext'


const Products = () => {

  const [products, setProducts] = useState<ProductInterface[] | null>(null)

  const { category } = useCategoryContext()


  useEffect(() => {
    const getProducts = async() => {
        try {
            const { data } = await axios.get(PRODUCTS_URL)
            setProducts(data)
        } catch (error) {
            console.log(error);     
        }
    }
    getProducts()
  },[])


  const renderProducts = () => {
      if (products) {
          
          if(category !== '') {
            return products.filter(product => {
                return product.category === category
            }).map((product) => {
                return <Product key={product.id} 
                          name={product.name} 
                          avatar={product.avatar}
                          price={product.price} 
                          id={product.id}
                      />
            })
          }

          if(category === '') {
            return products.map((product) => {
                return <Product key={product.id} 
                          name={product.name} 
                          avatar={product.avatar}
                          price={product.price} 
                          id={product.id}
                      />
            })
        }

      } 
  }

  return (
    <div className="flex items-center justify-between m-8">
        <div id="container" className="grid lg:grid-cols-4 sm:grid-cols-1 w-full gap-4 overflow-y-scroll">
            {renderProducts()}
        </div>
    </div>
  )
}

export default Products