import Wrapper from '../layouts/Wrapper';
import InstructorReviewMain from '../dashboard/instructor-dashboard/instructor-review';
import SEO from '../components/SEO';

const InstructorReview = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SrCoding Instructor Review'} />
         <InstructorReviewMain />
      </Wrapper>
   );
};

export default InstructorReview;