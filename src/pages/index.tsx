import Head from 'next/head'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { useEffect, useState } from 'react'
import Spinner from '@/components/spinner/Spinner'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>

      {isLoading ? <Spinner /> : null}
      
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
