import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import InjectableSvg from '../../../hooks/InjectableSvg';

interface DataType {
   id: number;
   desc: string;
   title: string;
   designation: string;
};

const testi_data: DataType[] = [
   {
      id: 1,
      desc: "“ Manage and streamline operations acrosers multiple locations wear sales channels, and employees toter improve efficiency stre sales channe amline “",
      title: "Brooklyn Simmons",
      designation: "Engineer",
   },
   {
      id: 2,
      desc: "“ Manage and streamline operations acrosers multiple locations wear sales channels, and employees toter improve efficiency stre sales channe amline “",
      title: "Brooklyn Simmons",
      designation: "Engineer",
   },
   {
      id: 3,
      desc: "“ Manage and streamline operations acrosers multiple locations wear sales channels, and employees toter improve efficiency stre sales channe amline “",
      title: "Brooklyn Simmons",
      designation: "Engineer",
   },
];

const setting = {
   slidesPerView: 1,
   spaceBetween: 30,
   observer: true,
   observeParents: true,
   loop: true,
   breakpoints: {
      '1500': {
         slidesPerView: 1,
      },
      '1200': {
         slidesPerView: 1,
      },
      '992': {
         slidesPerView: 1,
         spaceBetween: 24,
      },
      '768': {
         slidesPerView: 1,
         spaceBetween: 24,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   pagination: {
      el: '.testimonial-pagination',
      clickable: true,
   },
}

const Testimonial = () => {

   return (
      <section className="testimonial__area-four tg-motion-effects " style={{
         backgroundColor:'#0AA897'
      }}>
         <div className="testimonial__bg-shape-one">
            <InjectableSvg src="/assets/img/others/h5_testimonial_bg_shape01.svg" alt="" className="injectable" />
         </div>
         <div className="testimonial__bg-shape-two">
            <InjectableSvg src="/assets/img/others/h5_testimonial_bg_shape02.svg" alt="" className="injectable" />
         </div>
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-7 order-0 order-lg-2">
                  <Swiper {...setting} modules={[Pagination]} className="swiper-container testimonial-active-four">
                    
                           <div className="">
                              
                              <h1 className='p-4 text-[#fff]'>Want to stay informed about
                              new courses & study?</h1>
                              <div className="testimonial__bottom-two">
                                <input type="text" placeholder="Type your e-mail"  className='bg-[#4A44D1] text-[#fff] p-4 w-[70%]  rounded-full' />
                                <button className='flex-col mx-2 p-4 text-[#161439] rounded-full bg-[#FFC224]'> Subscribe Now</button>
                              </div>
                           </div>
                        
                     <div className="testimonial-pagination testimonial-pagination-two"></div>
                  </Swiper>
               </div>
               <div className="col-lg-5 col-md-7">
                  <div className="testimonial__img-two">
                     <img src="/assets/img/others/h5_testimonial_img.png" alt="img" />
                     <div className="shape">
                        <img src="/assets/img/others/h5_testimonial_shape01.svg" alt="shape" className="alltuchtopdown" />
                        <img src="/assets/img/others/h5_testimonial_shape02.svg" alt="shape" className="tg-motion-effects4" />
                        <img src="/assets/img/others/h5_testimonial_shape03.svg" alt="shape" className="tg-motion-effects3" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="testimonial__shape-wrap">
            <img src="/assets/img/others/h5_testimonial_shape04.svg" alt="shape" data-aos="fade-up" data-aos-delay="400" />
            <img src="/assets/img/others/h5_testimonial_shape05.svg" alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Testimonial