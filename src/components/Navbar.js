export const Navbar = () => {
    return <div className="flex justify-end py-6 px-4 md:px-12 lg:mt-8 ">
        <nav>
            <ul className="flex space-x-2 md:space-x-8">
                <li>
                    <a href="https://github.com/LevitKanner">
                        <img src="github.png" alt="github"
                             className="w-12 h-12 sm:w-16 sm:h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/LevitKanner">
                        <img src="twitter.png" alt="twitter"
                             className="w-12 h-12 sm:w-16 sm:h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/levit-osei/">
                        <img src="linkedin.png" alt="linkedIn"
                             className="w-12 h-12 sm:w-16 sm:h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/11344705/levit-kanner">
                        <img src="stackoverflow.png" alt="linkedIn"
                             className="w-12 h-12 sm:w-16 sm:h-16 transition duration-500 ease-in-out transform hover:scale-125"/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
}