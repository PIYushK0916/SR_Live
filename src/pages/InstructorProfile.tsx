import Wrapper from '../layouts/Wrapper';
import InstructorProfileMain from '../dashboard/instructor-dashboard/profile';
import SEO from '../components/SEO';

const InstructorProfile = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SrCoding Instructor Profile'} />
         <InstructorProfileMain />
      </Wrapper>
   );
};

export default InstructorProfile;