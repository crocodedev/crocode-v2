import Head from 'next/head';
import Script from 'next/script';

type TProps = {
  url: string;
  titleTemplate: boolean;
  title: string;
  description: string;
  image: {
    altText: string;
    image: {
      asset: {
        url: string;
        height: number;
        width: number;
      };
    };
  };
  siteUrl: string;
  lang: string;
  keywords: string;
  ogtype: string;
  twitterCard: string;
  name: string;
  defaultLocale: string;
};

const Seo = ({
  siteUrl,
  url,
  name,
  defaultLocale,
  titleTemplate,
  title,
  image,
  description,
  lang,
  keywords,
  ogtype,
  twitterCard,
}: TProps) => {
  const fullTitle = `${title}${titleTemplate && name ? ` - ${name}` : ''}`;
  const fullUrl = `${siteUrl}${url}${url === '/' ? '' : '/'}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name='description' content={description} />
        {keywords && <meta name='keywords' content={keywords} />}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='google-site-verification'
          content='jdk_IKLpcmmGj_NAXIN1PC7OsBI4TrQzlO52SG5ZQzo'
        />

        {/* Open Graph */}
        <meta property='og:title' content={fullTitle} />
        <meta property='og:description' content={description} />
        {ogtype && <meta property='og:type' content={ogtype} />}
        <meta property='og:url' content={fullUrl} />
        {image && (
          <>
            <meta property='og:image' content={image.image.asset.url} />
            <meta
              property='og:image:width'
              content={`${image.image.asset.width}`}
            />
            <meta
              property='og:image:height'
              content={`${image.image.asset.height}`}
            />
            <meta name='twitter:image:src' content={image.image.asset.url} />
          </>
        )}

        {/* Twitter */}
        {twitterCard && (
          <meta
            name='twitter:card'
            content={
              twitterCard === 'summaryLargeImage'
                ? 'summary_large_image'
                : twitterCard
            }
          />
        )}

        {/* Canonical */}
        <link rel='canonical' href={fullUrl} />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />

        {/* Language */}
        <html lang={lang || defaultLocale || 'en'} />
      </Head>

      {/* Google Analytics */}
      <Script
        id='googletagmanager'
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-JRHLER8WXC'
      />
      <Script id='gtag' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JRHLER8WXC');
        `}
      </Script>
    </>
  );
};

export default Seo;
