import Banner from "./Banner";
// import Features from "./Features";
// import Peoples from "./Peoples";
import About from "./About";
import Courses from "./Courses";
// import Faq from "./Faq";
// import Instructor from "./Instructor";
// import Blog from "./Blog";
import Testimonial from "./Testimonial";
// import HeaderFive from "../../../layouts/headers/HeaderFive"
import FooterThree from "../../../layouts/footers/FooterThree";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Counter from "../home-one/Counter";
import Categories from "../home-one/Categories";
import ChooseUs from "./ChooseUs";
import BrandOne from "../../common/brands/BrandOne";

const HomeFive = () => {
  return (
    <>
      <HeaderOne/> 
      <main className="main-area fix">
        <Banner />
        <Counter />
        {/* <Features /> */}
        <Categories />
        <Courses />
        <ChooseUs />
        {/* <Faq /> */}
        {/* <Instructor /> */}
        <Testimonial />
        <About />
        <BrandOne />
        {/* <Peoples /> */}
        
      </main>
      <FooterThree />
    </>
  );
};

export default HomeFive;
