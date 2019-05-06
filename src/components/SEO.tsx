import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  image?: string;
  pathname?: string;
  type?: string;
  twitterCreator?: string;
}

const siteUrl = new URL(window.location.href).origin;

// eslint-disable-next-line complexity
const SEO: React.SFC<SEOProps> = ({
  title,
  description,
  titleTemplate,
  image: img,
  pathname,
  type,
  twitterCreator
}) => {
  const image = img ? siteUrl + img : null;
  const url = `${siteUrl}${pathname || "/"}`;
  return (
    <>
      <Helmet title={title} titleTemplate={titleTemplate}>
        {description && <meta name="description" content={description} />}
        {image && <meta name="image" content={image} />}
        <meta property="og:url" content={url} />
        {type && <meta property="og:type" content={type} />}
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterCreator && (
          <meta name="twitter:creator" content={twitterCreator} />
        )}
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>
    </>
  );
};

export default SEO;
