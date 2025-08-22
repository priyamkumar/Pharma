import HeroSection from "./HeroSection";
import Divisions from "./Divisions";
import NowInStock from "./NowInStock";
import Discover from "./Discover";
import NewLaunches from "./NewLaunches";
import WhyUs from "./WhyUs";
import PromotionalInputs from "./PromotionalInputs";
import Directors from "./Directors";
import LetsTalk from "./LetsTalk";
import OurAdvantage from "./OurAdvantage";
import Calculators from "./Calculators";
import FranchiseOwners from "./FranchiseOwners";
import PharmaManufacturingCard from "./PharmaManufacturingCard";
import Benefits from "./Benefits";
import FeaturedIn from "./FeaturedIn";
import Testimonials from "./Testimonials";
import PageContactForm from "./PageContactForm";
import MovingText from "./MovingText";
import EnquiryModal from "./EnquiryModal";
import HeroSection2 from "./HeroSection2";
import ComprehensivePharmaSolutions from "./comprehensivePharmaSolutions";
import SuaveHealthcareOverview from "./Overview";
import BlogsSection from "./BlogSection";
import ProductsSample from "./ProductsSample";

export default function Home() {
  return (
    <>
      <HeroSection2 />
      <ComprehensivePharmaSolutions />
      {/* <NowInStock /> */}
      <SuaveHealthcareOverview />
      <ProductsSample />
      {/* <NewLaunches /> */}
      <WhyUs />
      {/* <PromotionalInputs /> */}
      {/* <Directors /> */}
      {/* <LetsTalk /> */}
      <OurAdvantage />
      <Calculators />
      {/* <FranchiseOwners /> */}
      <BlogsSection />
      {/* <PharmaManufacturingCard /> */}
      {/* <Benefits /> */}
      {/* <FeaturedIn />
      <Testimonials /> */}
      <PageContactForm />
      {/* <EnquiryModal /> */}
    </>
  );
}
