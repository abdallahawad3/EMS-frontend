import { Link } from "react-router-dom";
import LoginLeftSide from "../components/Login/LoginLeftSide";
import { ArrowRight } from "lucide-react";

const LoginLandingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <LoginLeftSide />

      <div className="flex h-screen items-center justify-center">
        <div className="m-auto w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-lg text-gray-600 mb-8">Please select your login type to continue.</p>
          <div className="space-y-4">
            <Link
              to="/login/admin"
              className="w-full flex items-center justify-between py-5 px-6 group rounded border-[#E2E8F0] border bg-gray-100/50 hover:bg-gray-100 transition"
            >
              <span>Admin Login</span>
              <ArrowRight
                className="group-hover:translate-x-1 duration-150 transition-transform text-[#90A1B9]"
                size={16}
              />
            </Link>
            <Link
              to="/login/employee"
              className="w-full flex items-center justify-between py-5 px-6 group rounded border-[#E2E8F0] border bg-[#F8FAFC] hover:bg-[#F8FAFC]/80 transition"
            >
              <span>Employee Login</span>
              <ArrowRight
                className="group-hover:translate-x-1 duration-150 transition-transform text-[#90A1B9]"
                size={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLandingPage;
