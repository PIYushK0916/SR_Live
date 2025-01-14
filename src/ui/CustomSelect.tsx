/* eslint-disable @typescript-eslint/no-explicit-any */
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

// const animatedComponents = makeAnimated();

// const options = [
//    { value: 'business', label: 'Business' },
//    { value: 'data-science', label: 'Data Science' },
//    { value: 'art-design', label: 'Art & Design' },
//    { value: 'marketing', label: 'Marketing' },
//    { value: 'finance', label: 'Finance' },
// ];

const CustomSelect = ({ value, onChange }: any) => {
   return (
      <form onSubmit={(e) => e.preventDefault()} className="tgmenu__search-form rounded-0 border-0 border-bottom text-white">
        
           
           
         <div className="input-grp border-0">
            <input type="text"  value={value}
               onChange={onChange} placeholder="Search For Course . . ." />
            <button type="submit"><i className="flaticon-search bg-#0ECDB9" style={{background: "#0ECDB9"}}></i></button>
         </div>
      </form>
   );
};

export default CustomSelect;
