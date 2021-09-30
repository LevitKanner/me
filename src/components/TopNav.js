export const TopNav = () => {
    return <div className="flex justify-end py-6 px-12">
        <nav>
            <ul className="flex space-x-12">
                <li>
                    <a href="/" className="text-lg hover:text-blue-600 font-semibold"> Contact Me</a>
                </li>
                <li>
                    <a href="/" className="text-lg hover:text-blue-600 font-semibold"> Projects </a>
                </li>
            </ul>
        </nav>
    </div>
}