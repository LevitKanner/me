export const Navbar = () => {
    return <div className="flex justify-end py-6 px-12 ">
        <nav>
            <ul className="flex space-x-12">
                <li>
                    <img src="github-logo.png" alt="github" className="w-16 h-16 hover:w-24 hover:h-24"/>
                </li>
                <li>
                    <img src="twitter.png" alt="twitter" className="w-16 h-16 hover:w-24 hover:h-24"/>
                </li>
                <li>
                    <img src="linkedin.png" alt="linkedIn" className="w-16 h-16 hover:w-24 hover:h-24"/>
                </li>
            </ul>
        </nav>
    </div>
}