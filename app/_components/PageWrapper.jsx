export default function PageWrapper({ children }) {
    return (
        <main className='flex justify-center min-h-[calc(100dvh-100px)] w-screen'>
            {children}
        </main>
    )
}