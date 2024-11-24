export default function ContentWrapper({children, className}) {
    return(
        <div className={`flex flex-col py-6 px-10 ${className}`}>
            {children}
        </div>
    )
}