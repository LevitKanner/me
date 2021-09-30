export const Navbar = () => {
    return <div className="flex justify-end py-6 px-12 lg:mt-8 ">
        <nav>
            <ul className="flex space-x-12">
                <li>
                    <img src="github.png" alt="github" className="w-16 h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                </li>
                <li>
                    <img src="twitter.png" alt="twitter" className="w-16 h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                </li>
                <li>
                    <img src="linkedin.png" alt="linkedIn" className="w-16 h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                </li>
            </ul>
        </nav>
    </div>
}