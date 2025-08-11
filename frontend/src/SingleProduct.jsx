import MedicineProductCard from "./MedicineProductCard";
import Trusted from "./Trusted";
import ProductInfoLayout from "./ProductInfo";
import EnquiryModal from "./EnquiryModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "./main";
import { useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SimilarProducts from "./SimilarProducts";
import { Box } from "@mui/material";
import GradientCircularProgress from "./Loader";

export default function SingleProduct() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

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
  return loading || !product ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="91vh"
    >
      <GradientCircularProgress />
    </Box>
  ) : (
    <div className="min-h-screen py-8 px-4">
      <div className="md:max-w-[75vw] mx-auto">
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span
              className="hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <ChevronRight className="w-4 h-4" />
            <span
              className="hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-bold text-blue-800">
              {product ? product.name : "Loading..."}
            </span>
          </nav>
        </div>
        <MedicineProductCard product={product} />
        <Trusted />
        <ProductInfoLayout product={product} />
        <SimilarProducts currentProduct={product} loading={loading} />
        {/* <EnquiryModal /> */}
      </div>
    </div>
  );
}
