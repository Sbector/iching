import Header from './_components/Header'
import PageWrapper from './_components/PageWrapper'
import './globals.css'

export const metadata = {
  title: 'I ching',
  description: 'An asistent for I ching reading',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white dark:bg-black text-black dark:text-white box-border'>
      <body className='max-w-screen overflow-x-hidden'>
        <Header />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
