import React from "react";
import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: string;
   class_name?: string;
   sidebar_details: {
      id: number;
      link: string;
      icon: string;
      title: string;
   }[];
};

const sidebar_data: DataType[] = [
   {
      id: 1,
      title: "Welcome, Jone Due",
      sidebar_details: [
         {
            id: 1,
            link: "/instructor-dashboard",
            icon: "fas fa-home",
            title: "Dashboard",
         },
         {
            id: 2,
            link: "/instructor-profile",
            icon: "SkillGro-avatar",
            title: "My Profile",
         },
         {
            id: 3,
            link: "/instructor-enrolled-courses",
            icon: "SkillGro-book",
            title: "Enrolled Courses",
         },
         {
            id: 4,
            link: "/instructor-wishlist",
            icon: "SkillGro-label",
            title: "Wishlist",
         },
         {
            id: 5,
            link: "/instructor-review",
            icon: "SkillGro-book-2",
            title: "Reviews",
         },
         {
            id: 6,
            link: "/instructor-attempts",
            icon: "SkillGro-question",
            title: "My Quiz Attempts",
         },
         {
            id: 7,
            link: "/instructor-history",
            icon: "SkillGro-satchel",
            title: "Order History",
         },
      ],
   },
   {
      id: 2,
      title: "INSTRUCTOR",
      class_name: "mt-40",
      sidebar_details: [
         {
            id: 1,
            link: "/instructor-courses",
            icon: "SkillGro-video-tutorial",
            title: "My Courses",
         },
         {
            id: 2,
            link: "/instructor-announcement",
            icon: "SkillGro-marketing",
            title: "Announcements",
         },
         {
            id: 3,
            link: "/instructor-quiz",
            icon: "SkillGro-chat",
            title: "Quiz Attempts",
         },
         {
            id: 4,
            link: "/instructor-assignment",
            icon: "SkillGro-list",
            title: "Assignments",
         },
      ],
   },
   {
      id: 3,
      title: "User",
      class_name: "mt-30",
      sidebar_details: [
         {
            id: 1,
            link: "/instructor-setting",
            icon: "SkillGro-settings",
            title: "Settings",
         },
         {
            id: 2,
            link: "/",
            icon: "SkillGro-logout",
            title: "Logout",
         },
      ],
   },
];

const DashboardSidebar = () => {

   return (
      <div className="col-lg-3">
         <div className="p-4 text-white bg-[#5600CE29] rounded-3xl">
         {sidebar_data.map((item) => (
               <React.Fragment key={item.id}>
                  <div className={`dashboard__sidebar-title mb-20 ${item.class_name}`}>
                     <h6 className="title text-white">{item.title}</h6>
                  </div>
                  <nav className="dashboard__sidebar-menu">
                     <ul className="list-wrap">
                        {item.sidebar_details.map((list) => (
                           <li  key={list.id}>
                              <Link className="text-white" to={list.link}>
                                 <i className={list.icon}></i>
                                 {list.title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </React.Fragment>
            ))}
         </div>
      </div>
   )
}

export default DashboardSidebar