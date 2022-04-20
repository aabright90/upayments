import { useState, useEffect } from 'react'
import { CATEGORIES_URL, PRODUCTS_URL_POST } from '../utils'
import { useNavigate } from 'react-router-dom'
import { CategoryInterface } from '../types/interfaces'
import axios from 'axios'

const Register = () => {

  const [categories, setCategories] = useState<CategoryInterface[] | null>(null)
  
  const [name, setName] = useState<string>()
  const [category, setCategory] = useState<string>('Electronic')
  const [description, setDescription] = useState<string>()
  const [avatar, setAvatar] = useState<string>()
  const [developerEmail, setDeveloperEmail] = useState<string>()
  const [price, setPrice] = useState<number>()

  const navigate = useNavigate()

  const handleSubmit = async () => {
      try {
        await axios.post(PRODUCTS_URL_POST, {
          name,
          category,
          description,
          avatar,
          developerEmail,
          price
        })
        .then((res) => console.log(res))

        navigate('/')
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() =>{
    const getCategories = async () => {
        try {
            const { data } = await axios.get(CATEGORIES_URL)
            setCategories(data)
        } catch (error) {
            console.log(error);
            
        }
    } 
    getCategories()
},[])

const renderOptions = () => {
  if (categories) {
      return categories.map((category, index) => {
          return(
              <option key={index}>
                  {category.name}
              </option>
          )
      })
  }
}

  return (
    <div className="flex items-center justify-center m-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Name
          </label>
          <input onChange={(e) => setName(e.target.value)}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ProductName" type="text" placeholder="Product Name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Description
          </label>
          <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleFormControlTextarea1"
          placeholder="Product Description"
        ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input onChange={(e) => setAvatar(e.target.value)}className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ProductName" type="text" placeholder="Image URL"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select a Category
          </label>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full h-10 pl-3 pr-6 text-base bg-white border rounded appearance-none focus:shadow-outline placeholder:italic placeholder:text-slate-400">
                {renderOptions()}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input onChange={(e) => setPrice(parseInt(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ProductName" type="number" placeholder="Price"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Developer Email
          </label>
          <input onChange={(e) => setDeveloperEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ProductName" type="email" placeholder="Your Email"/>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register