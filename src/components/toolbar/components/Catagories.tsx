import { useState, useEffect, FC } from 'react'
import { CATEGORIES_URL } from '../../../utils'
import { useCategoryContext } from '../../../contexts/CategoryContext'
import { CategoryInterface } from '../../../types/interfaces'
import axios from 'axios'

const Catagories: FC = () => {

    const [categories, setCategories] = useState<CategoryInterface[] | null>(null)

    const { setCategory } = useCategoryContext()

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
        <div id="dropdown" className="relative inline-block bg-white">
            <select onChange={(e) => setCategory(e.target.value)} className="h-10 pl-3 pr-6 text-base bg-white border rounded-lg appearance-none focus:shadow-outline placeholder:italic placeholder:text-slate-400">
                <option selected value=''>Select a Category</option>
                {renderOptions()}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
        </div>
    )
}

export default Catagories
