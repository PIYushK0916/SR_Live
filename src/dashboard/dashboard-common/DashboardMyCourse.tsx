import React from "react";

const DashboardMyCourse = () => {
  // Example course data
  const courses = [
    { name: "Web Development", enrolled: 50, rating: 5 },
    { name: "Web Development", enrolled: 50, rating: 5 },
    { name: "Web Development", enrolled: 50, rating: 5 },
    { name: "Web Development", enrolled: 50, rating: 5 },
  ];

  return (
    <div>
      <h5 className="text-white">My Course</h5>
      <div className="w-full text-black text-center h-full min-h-[5vw] bg-white rounded-xl mt-4 p-2">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-[#E4E3FA] text-center">
            <tr>
              <th className="px-4 py-3 text-lg font-semibold border-b border-gray-200">Course Name</th>
              <th className="px-4 py-3 text-lg font-semibold border-b border-gray-200">Enrolled</th>
              <th className="px-4 py-3 text-lg font-semibold border-b border-gray-200">Rating</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-4 py-3 border-b text-sm border-gray-200">
                  {course.name}
                </td>
                <td className="px-4 py-3 border-b text-sm border-gray-200">
                  {course.enrolled}
                </td>
                <td className="px-4 py-3 border-b text-sm border-gray-200">
                  {"⭐".repeat(course.rating)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardMyCourse;
