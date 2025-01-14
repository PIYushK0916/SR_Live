import Wrapper from '../layouts/Wrapper';
import StudentSettingMain from '../dashboard/student-dashboard/student-setting';
import SEO from '../components/SEO';

const StudentSetting = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SrCoding Student Setting'} />
         <StudentSettingMain />
      </Wrapper>
   );
};

export default StudentSetting;