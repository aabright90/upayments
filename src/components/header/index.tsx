import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="shadow-xl rounded bg-white m-8 flex items-center z-50">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <nav className="font-sen hover:bg-gray-200 p-1 text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden rounded">
                        <Link to="/" className="flex">
                            uPayments
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center">
                    <nav className="font-sen hover:bg-gray-200 p-1 text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden rounded">
                        <Link to="/new-product" className="flex">
                            Register
                        </Link>
                    </nav>
                    <button className="lg:hidden flex flex-col ml-4">
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}
