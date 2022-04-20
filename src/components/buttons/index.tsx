import { Link } from 'react-router-dom'
import '../../assets/styles/buttons.css'

export const AddButton = () => {
    return (
        <Link to='new-product'>
            <div id="addbtn">
                +
            </div>
        </Link>
    )
}