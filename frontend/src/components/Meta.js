import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Gizmo',
  description: 'Top quality electronic products at affordable prices',
  keywords:
    ' electronics, gizmo, electronic shop, buy electronics, cheap electronics, affordable electronics, gadgets, low price gadgets, mobiles, laptops, headphones, airpods',
};

export default Meta;
