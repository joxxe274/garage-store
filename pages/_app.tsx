import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MainLayout } from '../layouts/Main.layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
        <div className="footer">
          <div className="footer-content">
            <div className="item">
              <a href="mailto:joxxe274@gmail.com?subject=Interesado en venta de garage">
                <FontAwesomeIcon icon={faEnvelope} size={'xs'} color="#fff" />
                joxxe274@gmail.com
              </a>
            </div>
            <div className="item">
              <a href="tel:+50660883684">
                <FontAwesomeIcon icon={faPhone} size={'xs'} color="#fff" />
                +506 6088-3684
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default MyApp
