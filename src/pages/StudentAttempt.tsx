import Wrapper from '../layouts/Wrapper';
import StudentAttemptMain from '../dashboard/student-dashboard/student-attempts';
import SEO from '../components/SEO';

const StudentAttempt = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SrCoding Student Attempt'} />
         <StudentAttemptMain />
      </Wrapper>
   );
};

export default StudentAttempt;