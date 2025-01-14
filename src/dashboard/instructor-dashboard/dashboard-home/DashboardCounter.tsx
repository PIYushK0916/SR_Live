import React from "react";
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const DashboardCounter = () => {
  const COLORS = ["#8884d8", "#82ca9d", "#ff7300"];
  
  // Example data for pie chart
  const pieChartData = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 300 },
  ];
  
  // Example data for bar chart
  const barChartData = [
    { name: "Jan", uv: 400, pv: 2400 },
    { name: "Feb", uv: 300, pv: 1398 },
    { name: "Mar", uv: 200, pv: 9800 },
    // ... add more months
  ];

  const dashboardCountData = [
    { id: 1, title: "Students Enrolled", count: 30, type: "bar" },
    { id: 2, title: "Active Courses", count: 15, type: "pie" },
    { id: 3, title: "Completed Courses", count: 10, type: "pie" },
    { id: 4, title: "Total Students", count: 50, type: "pie" },
    { id: 5, title: "Total Courses", count: 25, type: "pie" },
    { id: 6, title: "Total Earnings", count: "$360", type: "bar" },
  ];

  return (
    <div className="row">
      {dashboardCountData.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-4 col-sm-6">
          <div className="dashboard__counter-item bg-white">
            <div>
              <h6 className="text-left font-normal">{item.title}</h6>
              <h3 className="text-left font-normal text-black">{item.count}</h3>
              <div className="flex justify-center items-center w-full">
                {item.type === "pie" ? (
                  <PieChart width={200} height={250}>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                ) : (
                  <BarChart width={200} height={250} data={barChartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#8884d8" />
                    <Bar dataKey="pv" fill="#82ca9d" />
                  </BarChart>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCounter;
