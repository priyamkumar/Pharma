import React from "react";
import MedicineProductCard from "./MedicineProductCard";
import Trusted from "./Trusted";
import ProductInfoLayout from "./ProductInfo";
import EnquiryModal from "./EnquiryModal";

export default function SingleProduct() {
  return (
    <>
      <MedicineProductCard />
      <Trusted/>
      <ProductInfoLayout/>
      <EnquiryModal />
    </>
  );
}
