import Search from './components/Search'
import Catagories from './components/Catagories'

export const Toolbar = () => {
  return (
    <div id="toolbar" className="flex items-center justify-between m-8 z-50">
        <Search/>
        <Catagories/>
    </div>
  )
}

