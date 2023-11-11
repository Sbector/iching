import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'iching',
  description: 'An asistent for the i ching reading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white dark:bg-black'>
      <body className='max-w-screen-md mx-auto'>
          <Header/>
          <div className='m-4 text-black dark:text-white'>
            {children}
          </div>  
      </body>
    </html>
  )
}
