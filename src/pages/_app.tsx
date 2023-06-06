import type {AppPropsWithLayout} from 'next/app'
import GlobalStyles from '@/components/utils/global-styles'

function MyApp({Component, pageProps, router}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <GlobalStyles/>
        {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp