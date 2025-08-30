import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "./main";

const SEO = ({ slug }) => {
  const [seo, setSeo] = useState(null);
  const fetchSEO = async () => {
    try {
      const { data } = await axios.get(`${server}/api/v1/seo/admin/${slug}`);
      setSeo(data.seo);
    } catch (err) {
    }
  };
  useEffect(() => {
    fetchSEO();
  }, [slug]);

  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
    </Helmet>
  );
};

export default SEO;
