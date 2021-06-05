import Header from './header'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { LightningProvider } from './lightning'
import { useRouter } from 'next/router'
import Footer from './footer'

export default function Layout ({ noContain, noFooter, children }) {
  const router = useRouter()
  const defaultTitle = router.asPath.split('?')[0].slice(1)
  return (
    <>
      <LightningProvider>
        <Head>
          <title>{defaultTitle && `${defaultTitle} \\ `}stacker news</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
        {noContain
          ? children
          : (
            <Container className='my-1 mb-4 px-sm-0'>
              {children}
            </Container>
            )}
        {!noFooter && <Footer />}
      </LightningProvider>
    </>
  )
}