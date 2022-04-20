import { createContext, useContext } from 'react'
import { CategoryContextType } from '../types/types'

export const CategoryContext = createContext<CategoryContextType>({
    category: '',
    setCategory: () => ''
})

export const useCategoryContext = () => useContext(CategoryContext)