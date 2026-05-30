import { AlertCircleIcon, CalendarIcon, ClockIcon } from "lucide-react";
import type { dummyAttendanceData } from "../../data/dummyData";

interface AttendanceStatesProps {
  history: typeof dummyAttendanceData;
}
const AttendanceStates = ({ history }: AttendanceStatesProps) => {
  const totalPresentDays = history.filter(
    (record) => record.status.toLocaleLowerCase() === "present",
  ).length;
  const totalLate = history.filter((record) => record.status.toLocaleLowerCase() === "late").length;

  const states = [
    {
      title: "Total Present Days",
      value: totalPresentDays,
      icon: CalendarIcon,
    },
    {
      title: "Total Late Days",
      value: totalLate,
      icon: AlertCircleIcon,
    },
    {
      title: "AVG. Working Hours",
      value: history.reduce((acc, record) => acc + record.workingHours, 0) / history.length || 0,
      icon: ClockIcon,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grdi-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
      {states.map((state) => (
        <div
          key={state.title}
          className="card card-hover p-5 sm:p-6 flex itmes-center group relative overflow-hidden gap-4"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70" />
          <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors duration-200">
            <state.icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200" />
          </div>
          <div>
            <p className="text-sm text-slate-500">{state.title}</p>
            <p className="text-2xl font-medium text-slate-900 tracking-tight">{state.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceStates;
