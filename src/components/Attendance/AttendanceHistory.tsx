import { format } from "date-fns";
import type { dummyAttendanceData } from "../../data/dummyData";

interface AttendanceHistoryProps {
  history: typeof dummyAttendanceData;
}

const AttendanceHistory = ({ history }: AttendanceHistoryProps) => {
  return (
    <div className="card overflow-hidden">
      <div className="p-6 py-4 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-4">
          Attendance History
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table-modern">
          <thead>
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Check-in</th>
              <th className="px-6 py-4">Check-out</th>
              <th className="px-6 py-4">Working Hours</th>
              <th className="px-6 py-4">Day Type</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record._id} className="hover:bg-slate-50">
                <td className="px-6 py-4">{format(new Date(record.date), "MMM-dd-yyyy")}</td>
                <td className="px-6 py-4">
                  {record.checkIn ? format(new Date(record.checkIn), "h:mm a") : "-"}
                </td>
                <td className="px-6 py-4">
                  {record.checkOut ? format(new Date(record.checkOut), "h:mm a") : "-"}
                </td>
                <td className="px-6 py-4">{record.workingHours} hrs</td>
                <td className="px-6 py-4">{record.dayType}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      record.status.toLowerCase() === "present"
                        ? "bg-green-100 text-green-800"
                        : record.status.toLowerCase() === "late"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;
