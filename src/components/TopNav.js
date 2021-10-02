export const TopNav = ({toggleMessageBox}) => {
    return <div className="flex justify-end py-6 px-12 text-gold-500">
        <button className="text-lg hover:text-blue-600 font-semibold"
                onClick={toggleMessageBox}> Contact Me
        </button>
    </div>
}