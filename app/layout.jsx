import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'I ching',
  description: 'An asistent for I ching reading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white dark:bg-black box-border'>
      <body className='flex flex-col flex-wrap items-center max-w-screen overflow-x-hidden'>
          <Header/>
          <main className='flex text-black dark:text-white min-h-[calc(100vh-150px)] m-4 p-6 max-w-screen-md'>
            {children}
          </main>  
      </body>
    </html>
  )
}
