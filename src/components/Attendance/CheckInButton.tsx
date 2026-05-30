import { useState } from "react";
import type { dummyAttendanceData } from "../../data/dummyData";
import { Loader2Icon, LogInIcon, LogOutIcon } from "lucide-react";

interface CheckInButtonProps {
  todayHistory: (typeof dummyAttendanceData)[0] | undefined;
  onAction: () => void;
}
const CheckInButton = ({ todayHistory, onAction }: CheckInButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleCheckInOut = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAction();
    }, 1000);
  };

  if (todayHistory?.checkOut) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900">Work Day Completed</h3>
        <p className="text-slate-500 text-sm mt-1">
          You have already checked out for today. Great job!
        </p>
      </div>
    );
  }

  const isCheckedIn = !!todayHistory?.checkIn;

  return (
    <div className="absolute bottom-4 right-4 flex flex-col z-1">
      <button
        className={`w-full max-w-xs flex justify-between items-center gap-8 p-4 rounded-x1 bg-linear-to-br text-white ${isCheckedIn ? "from-slate-700 to-slate-900" : "from-indigo-700 to-indigo-900"} shadow-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl`}
        onClick={handleCheckInOut}
        disabled={loading}
      >
        {loading ? (
          <Loader2Icon className="size-7 animate-spin" />
        ) : isCheckedIn ? (
          <LogOutIcon className="size-7" />
        ) : (
          <LogInIcon className="size-7" />
        )}

        <div className="relative flex flex-col items-center text-center">
          <h2>{loading ? "Processing..." : isCheckedIn ? "Check Out" : "Check In"}</h2>
          <p>{isCheckedIn ? "Click to end shift" : "Click to start shift"}</p>
        </div>
      </button>
    </div>
  );
};

export default CheckInButton;
