import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { TSeo } from '@/types/seo';

const NAME_SITE = 'Crocode';

const Seo = (props: TSeo) => {
  const {
    titleTemplate,
    title,
    description,
    keywords,
    image,
    ogType,
    twitterCard,
  } = props;

  const router = useRouter();
  const url = router.pathname;

  const fullTitle = `${title}${titleTemplate ? ` - ${NAME_SITE}` : ''}`;

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
        {ogType && <meta property='og:type' content={ogType} />}
        <meta property='og:url' content={url} />
        {image?.image?.asset?.url && (
          <>
            <meta property='og:image' content={image.image.asset.url} />
            {image.image.asset.metadata?.dimensions && (
              <>
                <meta
                  property='og:image:width'
                  content={image.image.asset.metadata.dimensions.width.toString()}
                />
                <meta
                  property='og:image:height'
                  content={image.image.asset.metadata.dimensions.height.toString()}
                />
              </>
            )}
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
      </Head>

      {/* <Script
        id='googletagmanager'
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-JRHLER8WXC'
      /> */}
      <Script id='gtag' strategy='afterInteractive'>
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-JRHLER8WXC');
         `}
      </Script>

      {/* reCAPTCHA Script */}
      <Script
        id='recaptcha'
        src='https://www.google.com/recaptcha/api.js?render=explicit'
        strategy='afterInteractive'
      />

      {/* Alternative reCAPTCHA v3 Script */}
      <Script
        id='recaptcha-v3'
        src='https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY'
        strategy='afterInteractive'
      />
    </>
  );
};

export default Seo;
