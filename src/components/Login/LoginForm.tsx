import { useNavigate } from "react-router-dom";
import LoginLeftSide from "./LoginLeftSide";
import { ArrowLeft } from "lucide-react";

interface IProps {
  title: string;
  role: "admin" | "employee";
  subtitle: string;
}

const LoginForm = ({ title, role, subtitle }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <LoginLeftSide />
      <div className="flex h-screen items-center  px-8 md:px-16 lg:px-24">
        <div className="flex flex-col flex-1">
          <button
            onClick={() => navigate(-1)}
            className="flex justify-start gap-1 items-center text-sm text-gray-500 mb-4 cursor-pointer hover:text-gray-700 transition"
          >
            <ArrowLeft size={14} />
            <span>Back to portals</span>
          </button>
          {/* Header */}
          <h2 className="text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{subtitle}</p>

          {/* Form */}
          <form className="space-y-3 w-full">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Enter your ${role} email`}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password  "
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Enter your ${role} password`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded hover:from-indigo-600 hover:to-indigo-600/70 transition cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
