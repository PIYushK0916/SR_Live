import { Link } from "react-router-dom"
import BtnArrow from "../../../svg/BtnArrow"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import '../../../../public/assets/css/main.css'
import { relative } from "path"

const Banner = () => {

   return (
      <>
    
      <section className="banner-area  tg-motion-effects" style={{ backgroundImage: `url(../../../../public/assets/img/banner/background.png)`, position:"relative", zIndex:'-10' }}>

         <div className="banner-bg-five-shape" style={{ backgroundImage: `url(../../../../public/assets/img/banner/background.png)`  }}></div>
         <div className="container">
            <div className="row justify-content-center align-items-center">
               <div className="col-xl-5 col-lg-5">
                  <div className="banner__content-five">
                     {/* <span className="sub-title" data-aos="fade-right" data-aos-delay="200">Kindergarten Care School</span> */}
                     <h2 className="title text-white" data-aos="fade-right" data-aos-delay="400">Never Stop <span>Learning </span>
                      Life Never Stop Teaching </h2>
                     <p data-aos="fade-right" className="text-white" data-aos-delay="600">Every teaching and learning journey is unique Following
                     We'll help guide your way.</p>
                     <div className="banner__btn" data-aos="fade-right" data-aos-delay="800">
                        <Link to="/courses" className="btn arrow-btn">Explore All Course <BtnArrow /></Link>
                     </div>
                  </div>
               </div>

               <div className="col-xl-7 col-lg-7 col-md-9 col-sm-10">
                  <div className="banner__images-five">
                     <img src="/assets/img/banner/h5_hero_img.png" alt="img" />
                     <div className="shape-wrap">
                        <div className="shape-one" data-aos="fade-up-right" data-aos-delay="800" >
                           <img src="/assets/img/banner/h5_hero_shape04.svg" alt="shape" className="tg-motion-effects1" />
                        </div>
                        <div className="shape-two" data-aos="fade-down-left" data-aos-delay="800">
                           <img src="/assets/img/banner/h5_hero_shape05.svg" alt="shape" className="tg-motion-effects3" />
                        </div>
                        <div className="shape-three" data-aos="fade-up-left" data-aos-delay="800">
                           <img src="/assets/img/banner/h5_hero_shape06.svg" alt="shape" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="banner__shape-wrap-two">
            <img src="/assets/img/banner/h5_hero_shape01.svg" alt="shape" data-aos="fade-right" data-aos-delay="1000" />
            <img src="/assets/img/banner/h5_hero_shape02.svg" alt="shape" className="tg-motion-effects7" />
            <img src="/assets/img/banner/h5_hero_shape03.svg" alt="shape" className="tg-motion-effects3" />
         </div>
      </section>
      </>
   )
}

export default Banner
