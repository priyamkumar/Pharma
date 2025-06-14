import MedicineProductCard from "./MedicineProductCard";
import Trusted from "./Trusted";
import ProductInfoLayout from "./ProductInfo";
import EnquiryModal from "./EnquiryModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "./main";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const params = useParams();

  async function fetchDetails() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${server}/api/v1/product/details/${params.id}`
      );
      setProduct(data.product);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);
  return (
    <>
      <MedicineProductCard product={product} loading={loading} />
      <Trusted />
      <ProductInfoLayout product={product} loading={loading} />
      <EnquiryModal />
    </>
  );
}
