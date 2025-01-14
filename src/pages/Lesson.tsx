import Wrapper from '../layouts/Wrapper';
import LessonMain from '../components/courses/lesson';
import SEO from '../components/SEO';

const Lesson = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'SrCoding Lesson'} />
         <LessonMain />
      </Wrapper>
   );
};

export default Lesson;