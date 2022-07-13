import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MainLayout } from '../layouts/Main.layout';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
        <div className="footer">
          <div className="footer-content">
            <div className="item">
              <a href="mailto:joxxe274@gmail.com?subject=Interesado en venta de garage">
                <Image src={'/assets/img/icons/mail-icon.png'} alt="Arrow" width={20} height={20}></Image>
                joxxe274@gmail.com
              </a>
            </div>
            <div className="item">
              <a href="tel:+50660883684">
                <Image src={'/assets/img/icons/phone-icon.png'} alt="Arrow" width={20} height={20}></Image>
                +506 6088-3684
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default MyApp
