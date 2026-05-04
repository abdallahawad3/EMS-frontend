import { Building2Icon, CalendarIcon, FileTextIcon, UsersIcon } from "lucide-react";
import { dummyAdminDashboardData } from "../../data/dummyData";

const Admin = () => {
  const data = dummyAdminDashboardData;
  const cards = [
    {
      icon: UsersIcon,
      value: data.totalEmployees,
      title: "Total Employees",
      subtitle: "All time",
    },
    {
      icon: Building2Icon,
      value: data.totalDepartments,
      title: "Total Departments",
      subtitle: "Active departments in the company",
    },
    {
      icon: CalendarIcon,
      value: data.todayAttendance,
      title: "Today's Attendance",
      subtitle: "Attendance for today",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Leave requests awaiting approval",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Welcome back, Admin! Here's an overview of the company's current status and key metrics.
          Use the links below to manage employees, attendance, leaves, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card card-hover group  relative overflow-hidden flex items-center justify-between p-5 sm:p-6"
          >
            <div>
              <div className="absolute inset-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-700/70" />
              <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
              <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>

            <card.icon
              className="size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-150"
              size={24}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
