import { ArrowRight, CalendarIcon, DollarSignIcon, FileTextIcon } from "lucide-react";
import { dummyEmployeeDashboardData } from "../../data/dummyData";
import { Link } from "react-router-dom";

interface EmployeeDashboardProps {
  data: typeof dummyEmployeeDashboardData;
}
const EmployeeDashboard = ({ data }: EmployeeDashboardProps) => {
  const cards = [
    {
      title: "Days Present",
      subtitle: "This month",
      value: data.currentMonthAttendance,
      icon: CalendarIcon,
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Leaves awaiting approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip ? `$${data.latestPayslip.netSalary}` : "N/A",
      title: "Latest Payslip",
      subtitle: "Your most recent payslip",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Welcome, {data.employee.firstName}!</h1>
        <p className="page-subtitle">
          {data.employee.position} - {data.employee?.department} Department
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 mb-8">
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

      <div className="flex flex-col md:flex-row gap-2">
        <Link
          to={"/attendance"}
          className="btn-primary text-center inline-flex items-center justify-center gap-2"
        >
          View Attendance
          <ArrowRight size={16} />
        </Link>
        <Link
          to={"/leaves"}
          className="btn-secondary text-center inline-flex items-center justify-center gap-2"
        >
          View Leaves
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
