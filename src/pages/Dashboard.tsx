import { useEffect, useState } from "react";
import { dummyEmployeeDashboardData } from "../data/dummyData";
import { Loader } from "lucide-react";
import EmployeeDashboard from "../components/Dashboard/Employee";
import Admin from "../components/Dashboard/Admin";

const DashboardPage = () => {
  const [data, setData] = useState<typeof dummyEmployeeDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const role = "admin"; // This would typically come from your auth context or user state
  useEffect(() => {
    setTimeout(() => {
      setData(dummyEmployeeDashboardData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin" size={48} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Failed to load dashboard data. Please try again later.</p>
      </div>
    );
  }

  if (role === "admin") {
    return <Admin />;
  } else {
    return <EmployeeDashboard data={data} />;
  }
};

export default DashboardPage;
