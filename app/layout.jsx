import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'iching',
  description: 'An asistent for the i ching reading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
