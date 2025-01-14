import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../redux/features/wishlistSlice";
import InjectableSvg from "../../../hooks/InjectableSvg";
import { Link } from "react-router-dom";
import course_data_two from "../../../data/home-data/CourseDataTwo";

const Courses = () => {

   const dispatch = useDispatch();
   // add to wishlist
   const handleAddToWishlist = (item: any) => {
      dispatch(addToWishlist(item));
   };

   return (
      // <section className="courses-area-four courses__bg-three" style={{ backgroundImage: `url(/assets/img/bg/h5_courses_bg.jpg)` }}>
      <section className="courses-area-four courses__bg-three" style={{ backgroundImage: `url(../../../../public/assets/img/bg/Backgroundpatterns.png)` }}>
         <div className="courses__bg-shape-one">
            <InjectableSvg src="/assets/img/courses/h5_courses_bg_shape01.svg" alt="" className="injectable" />
         </div>
         <div className="courses__bg-shape-two">
            <InjectableSvg src="/assets/img/courses/h5_courses_bg_shape02.svg" alt="" className="injectable" />
         </div>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5 col-lg-8">
                  <div className="section__title text-center mb-50">
                     <span className="sub-title text-[#F6F5FF]">Top Class Courses</span>
                     <h2 className="title bold text-[#F6F5FF]">Get The Best Exciting Class Experience With us</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {course_data_two.filter((items) => items.page === "home_5").map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                     <div className="courses__item-six shine__animate-item">
                        <div className="courses__item-thumb-five shine__animate-link">
                           <Link to="/course-details"><img src={item.thumb} alt="img" /></Link>
                           <a onClick={() => handleAddToWishlist(item)} className="courses__wishlist-two course-heart-btn" style={{ cursor: "pointer" }}><InjectableSvg src="/assets/img/icons/heart02.svg" alt="" className="injectable" /></a>
                        </div>
                        <div className="courses__item-content-five">
                           <ul className="courses__item-meta list-wrap">
                              
                              <li className="courses__review courses__review-two">
                              <span className="sub-title text-[#F6F5FF] p-2 rounded-full bg-[#fff]">App Devlopment</span>
                                 <div className="rating">
                                    <i className="fas fa-star"></i>
                                  
                                 </div>
                                 <span>{item.review}</span>
                              </li>
                              {/* <li className="price">${item.price}</li> */}
                           </ul>
                           <h2 className="title text-[#F6F5FF]"><Link to="/course-details">{item.title}</Link></h2>
                           <p className="text-[#fff]">{item.desc}</p>
                           <div className="courses__item-content-bottom-two">
                              <ul className="list-wrap">
                                 <li>
                                    <button  className="p-2 text-[#161439] shadow-lg theme_btn rounded-pill login-btn">
                                       Enroll Now -&gt;
                                    </button> 
                                 </li>
                                 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="courses__shape-wrap-three">
            <img src="/assets/img/courses/h5_courses_shape01.svg" alt="shape" data-aos="fade-right" data-aos-delay="400" />
            <img src="/assets/img/courses/h5_courses_shape01.svg" alt="shape" data-aos="fade-up-right" data-aos-delay="400" />
            <img src="/assets/img/courses/h5_courses_shape01.svg" alt="shape" className="alltuchtopdown" />
            <img src="/assets/img/courses/h5_courses_shape01.svg" alt="shape" data-aos="fade-up-left" data-aos-delay="400" />
         </div>
      </section>
   )
}

export default Courses