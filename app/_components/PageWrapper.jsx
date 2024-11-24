export default function PageWrapper({ children }) {
    return (
        <main className='flex justify-center min-h-[calc(100dvh-85px)] w-screen'>
            {children}
        </main>
    )
}