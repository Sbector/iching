import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'iching',
  description: 'An asistent for the i ching reading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white dark:bg-black'>
      <body className='flex flex-col flex-wrap items-center'>
          <Header/>
          <main className='flex text-black dark:text-white h-[calc(100vh-200px)] mt-10 m-4 p-6 max-w-screen-md min-h-full'>
            {children}
          </main>  
      </body>
    </html>
  )
}
