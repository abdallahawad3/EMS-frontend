/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import { dummyAttendanceData } from "../data/dummyData";
import LoaderComponent from "../components/Loading/Loader";
import CheckInButton from "../components/Attendance/CheckInButton";
import AttendanceStates from "../components/Attendance/AttendanceStates";
import AttendanceHistory from "../components/Attendance/AttendanceHistory";

const AttendancePage = () => {
  const [history, setHistory] = useState<typeof dummyAttendanceData>([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  console.log(setIsDeleted);

  const fetchAttendanceData = useCallback(async () => {
    setHistory(dummyAttendanceData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchAttendanceData();
  }, [fetchAttendanceData]);

  if (loading) {
    return <LoaderComponent />;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayRecords = history.find(
    (record) => new Date(record.date).toDateString() === today.toDateString(),
  );

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Attendance</h1>
        <p className="page-subtitle">Manage your attendance records</p>
      </div>

      {isDeleted ? (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center">
          <p className="text-rose-600">
            You can no longer clock in/out because your record has been marked as deleted.
          </p>
        </div>
      ) : (
        <div className="mb-8">
          <CheckInButton todayHistory={todayRecords} onAction={fetchAttendanceData} />
        </div>
      )}

      <AttendanceStates history={history} />
      <AttendanceHistory history={history} />
    </div>
  );
};

export default AttendancePage;
