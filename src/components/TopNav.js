import {Link} from "react-router-dom";

export const TopNav = () => {
    return <div className="flex justify-end py-6 px-12 text-gold-500">
        <nav>
            <ul className="flex space-x-12">
                <li>
                    <Link to="/contact" className="text-lg hover:text-blue-600 font-semibold"> Contact Me</Link>
                </li>
                <li>
                    <Link to="/" className="text-lg hover:text-blue-600 font-semibold"> Projects </Link>
                </li>
            </ul>
        </nav>
    </div>
}