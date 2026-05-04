import { useEffect, useState } from "react";
import EmployeeDashboard from "../components/Dashboard/Employee";
import Admin from "../components/Dashboard/Admin";
import LoaderComponent from "../components/Loading/Loader";

const DashboardPage = () => {
  const [role, setRole] = useState<"admin" | "employee">("admin");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <LoaderComponent />;
  }

  if (role === "admin") {
    return <Admin />;
  } else {
    return <EmployeeDashboard />;
  }
};

export default DashboardPage;
