export default function PageWrapper({ children }) {
    return (
        <main className='flex flex-col items-center justify-center 
        min-h-[calc(100dvh-85px)] w-screen
        mt-[85px] p-6'>
            {children}
        </main>
    )
}