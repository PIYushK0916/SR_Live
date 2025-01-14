import Count from "../../../components/common/Count";
import dashboard_count_data from "../../../data/dashboard-data/DashboardCounterData";
import DashboardBannerTwo from "../../dashboard-common/DashboardBannerTwo";
import DashboardMyCourse from "../../dashboard-common/DashboardMyCourse";
import DashboardCourse from "../../dashboard-common/DashboardCourse";
import DashboardSidebarTwo from "../../dashboard-common/DashboardSidebarTwo";
import { PieChart, Pie, Cell, Legend } from "recharts";

const StudentDashboardArea = () => {
  const COLORS = ["#8884d8", "#82ca9d", "#ff7300"];

  // Example data structure for the charts
  const chartData = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 300 },
  ];
  return (
    <section className="dashboard__area section-pb-120">
      <div className="container">
        <DashboardBannerTwo />
        <div className="dashboard__inner-wrap">
          <div className="row">
            <DashboardSidebarTwo />
            <div className="col-lg-9">
              <div className="dashboard__count-wrap">
                <div className="dashboard__content-title">
                  <h4 className="title text-white">Dashboard</h4>
                </div>
                <div className="row">
                  {dashboard_count_data.slice(0, 3).map((item) => (
                    <div key={item.id} className="col-lg-4  col-md-4 col-sm-6">
                      <div className="dashboard__counter-item bg-white">
                        <div className="">
                          <h6 className="text-left font-normal">{item.title}</h6>
                          <h3 className="text-left font-normal text-black">
                            {item.count}
                          </h3>
                          <div className="flex justify-center items-center w-full">
                          <PieChart className="" width={200} height={250}>
                            <Pie
                              data={chartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={80}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {chartData.map((entry, idx) => (
                                <Cell 
                                  key={`cell-${idx}`}
                                  fill={COLORS[idx % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Legend />
                          </PieChart>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <DashboardCourse />
              <DashboardMyCourse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboardArea;
