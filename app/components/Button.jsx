export default function Button( {children} ) {
    return (
        <button className="bg-gray-500 hover:bg-gray-300 rounded-md m-1 px-2">
            {children}
        </button>
    )
}