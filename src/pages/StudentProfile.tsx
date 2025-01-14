import Wrapper from '../layouts/Wrapper';
import StudentProfileMain from '../dashboard/student-dashboard/student-profile';
import SEO from '../components/SEO';

const StudentProfile = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SrCoding Student Profile'} />
         <StudentProfileMain />
      </Wrapper>
   );
};

export default StudentProfile;