import Head from 'next/head';
import React from 'react'

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string
  image?: string
}

export const MainLayout: React.FC<Props> = ({
  children,
  title = `Joxxe's garage sales`,
  description = 'Venta de garage en Costa Rica, vehículos, linea blanca, electrodomésticos, todo en excelente estado y buen precio.',
  image = `/meta/default.jpg`,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* social meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Joxxe's garage sales" />
        <meta name="twitter:creator" content="@joxxe274" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* open graph meta tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={process.env.SELF_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Creatorland" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_US" />
      </Head>
      <div>
        {children}
      </div>
    </>

  )
}
