interface DataType {
   id: number;
   icon: string;
   count: number;
   title: string;
};

const dashboard_count_data: DataType[] = [
   {
      id: 1,
      icon: "SkillGro-book",
      count: 30,
      title: "ENROLLED COURSES",
   },
   {
      id: 2,
      icon: "SkillGro-tutorial",
      count: 10,
      title: "ACTIVE COURSES",
   },
   {
      id: 3,
      icon: "SkillGro-diploma-1",
      count: 7,
      title: "COMPLETED COURSES",
   },
   {
      id: 4,
      icon: "SkillGro-group",
      count: 160,
      title: "TOTAL STUDENTS",
   },
   {
      id: 5,
      icon: "SkillGro-notepad",
      count: 30,
      title: "TOTAL COURSES",
   },
   {
      id: 6,
      icon: "SkillGro-dollar-currency-symbol",
      count: 29000,
      title: "TOTAL EARNINGS",
   },
];

export default dashboard_count_data;