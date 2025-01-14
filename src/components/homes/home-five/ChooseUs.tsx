import FaqOne from "../../common/faq/FaqOne";
import icon1 from "../../../../public/assets/img/icons/choosheusicon.png";
import doller from "../../../../public/assets/img/icons/doller.png";
import icon2 from "../../../../public/assets/img/icons/247.png";
import cont from "../../../../public/assets/img/icons/cont.png";
import star from "../../../../public/assets/img/icons/start.png";

const ChooseUs = () => {
  return (
    <section
      className="faq__area-two tg-motion-effects h-full section-py-140 courses-area-four courses__bg-three"
      style={{
        backgroundImage: `url(../../../../public/assets/img/bg/choosusbg.png)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-8 order-0 order-lg-2">
            <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-[4vw]">
              {/* card 2 column */}
              <div className="flex gap-4 flex-col">
                <div className="bg-gradient-to-b border rounded-3xl  p-6 rounded-lg text-white w-80 shadow-lg">
                  <button className=" bg-[#FFB100] px-1 rounded-full">
                    accesibility
                  </button>

                  <img className="m-auto" src={icon2} alt="icon" />
                  <span className="text-xl block p-2 text-[#fff]">
                    24/7 accesibility
                  </span>
                  <p className=" p-2  text-[#C4C4C4] text-sm">
                    Enjoy 24/7 access to our courses, allowing you to learn
                    whenever it fits your schedule, day or night.
                  </p>

                  <div className="flex items-end justify-end">
                    <div className="flex w-40 h-2 bg-[#0ECDB9] ml-0 end rounded"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-b border rounded-3xl  p-6 rounded-lg text-white w-80 shadow-lg">
                  <button className=" bg-[#FFB100] px-1 rounded-full">
                    Support
                  </button>

                  <img className="m-auto" src={cont} alt="icon" />
                  <span className="text-xl block p-2 text-[#fff]">
                    Dedicated support
                  </span>
                  <p className=" p-2  text-[#C4C4C4] text-sm">
                    Receive dedicated support from our expert team, ready to
                    assist you every step of the way."
                  </p>

                  <div className="flex items-end justify-end">
                    <div className="flex w-40 h-2 bg-[#0ECDB9] ml-0 end rounded"></div>
                  </div>
                </div>
              </div>

              {/* card1  column*/}

              <div className="flex flex-col gap-4 mt-[2vw]">
                <div className="bg-gradient-to-b border rounded-3xl  p-6 rounded-lg text-white w-80 shadow-lg">
                  <button className=" bg-[#FFB100] px-1 rounded-full">
                    Flexibility
                  </button>

                  <img className="m-auto" src={icon1} alt="icon" />
                  <span className="text-xl block p-2 text-[#fff]">
                    Learn from anywhere
                  </span>
                  <p className=" p-2  text-[#C4C4C4] text-sm">
                    Early intervention helps identify developmental concerns
                    before they turn into bigger problems, saving time and money
                    on more intensive treatments later.
                  </p>

                  <div className="flex items-end justify-end">
                    <div className="flex w-40 h-2 bg-[#0ECDB9] ml-0 end rounded"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-b border rounded-3xl  p-6 rounded-lg text-white w-80 shadow-lg">
                  <button className=" bg-[#FFB100] px-1 rounded-full">
                    Custamization
                  </button>

                  <img className="m-auto" src={doller} alt="icon" />
                  <span className="text-xl block p-2 text-[#fff]">
                    Customized learning point
                  </span>
                  <p className=" p-2  text-[#C4C4C4] text-sm">
                    Personalize your learning journey with tailored content that
                    adapts to your unique needs and pace.
                  </p>

                  <div className="flex items-end justify-end">
                    <div className="flex w-40 h-2 bg-[#0ECDB9] ml-0 end rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-4 ">
            <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
              <div className="flex flex-col  items-start justify-center ">
                <img src={star} className="block m-auto" alt="" />
                <span className="block text-2xl text-[#fff]">
                  why choose us
                </span>
                <h2 className="text-[#FFF] p-2">
                  Empower Your Learning Experience
                </h2>
                <p className="text-[#F5F4F9]">
                  Experience seamless learning integration with our innovative
                  LMS platform, designed to empower learners of all ages on
                  their educational journey. This transformative platform is
                  proudly developed by SR Edu Technologies Pvt Ltd, dedicated to
                  advancing the future of digital education.
                </p>
                <button className="p-2 text-[#161439] flex-col justify-start align-items-start shadow-lg theme_btn rounded-pill login-btn">
              Explore our courses -&gt;
              </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="faq__shape">
        <img
          src="/assets/img/others/h5_faq_shape01.svg"
          alt="shape"
          className="tg-motion-effects3"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
