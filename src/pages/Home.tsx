import { Fragment, useState } from 'react'
import Products from '../components/products'
import { Toolbar } from '../components/toolbar'
import { AddButton } from '../components/buttons/'
import { CategoryContext } from '../contexts/CategoryContext'

const Home = () => {

  const [category, setCategory] = useState<string>('')

  return (
    <Fragment>
        <AddButton/>
        <CategoryContext.Provider value={{ category, setCategory }}>
          <Toolbar/>
          <Products/>
        </CategoryContext.Provider>
    </Fragment>
  )
}

export default Home