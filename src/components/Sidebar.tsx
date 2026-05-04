/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData, NAVIGATION_LINKS } from "../data/dummyData";
import { ChevronRightIcon, LogOutIcon, MenuIcon, UserIcon, XIcon } from "lucide-react";

const Sidebar = () => {
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Sidebar content and logic will go here. For now, it's just a placeholder.
  const sidebarContent = (
    <>
      {/* Brand Header */}
      <div className="px-5 py-5 border-b border-white/6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="text-white size-7" />
            <div>
              <p className="font-semibold tracking-wide text-[13px]">Employee MS</p>
              <p className="text-[11px] text-slate-500 font-medium">Management System</p>
            </div>
            <button
              className="lg:hidden text-slate-400 hover:text-white p-1"
              onClick={() => setMobileOpen(false)}
            >
              <XIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* User Info */}
      {userName && (
        <div className="px-3 py-4 mb-1 rounded-lg bg-white/3 border border-white/4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-slate-800 flex items-center justify-center ring-1 ring-white/10 shrink-0">
              <span className="text-slate-400 text-xs font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-[13px] font-medium text-slate-200 truncate">{userName}</p>
              <p className="text-[11px] text-slate-500 truncate">ADMINISTRATOR</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links */}

      <div className="mt-4">
        <p className="text-[11px] uppercase truncate-[.12em] text-slate-500 font-semibold">
          Navigation Links
        </p>

        <div className="flex flex-col space-y-0.5 overflow-y-hidden mt-2">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.path);
            const Icon = link.icon;

            return (
              <Link
                to={link.path}
                key={link.path}
                className={`
          group flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium relative transition-all duration-150
          ${
            isActive
              ? "bg-indigo-500/12 text-indigo-300"
              : "text-slate-300 hover:text-white hover:bg-white/4"
          }
        `}
              >
                {isActive && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0.75 h-5 rounded-r-full bg-indigo-500" />
                )}

                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-300"
                  }`}
                />

                <span className="flex-1">{link.label}</span>
                {isActive && <ChevronRightIcon className="w-3 h-3 text-indigo-300 shrink-0" />}
              </Link>
            );
          })}
        </div>
      </div>
      {/* Logout Button */}
      <div className="absolute left-0 px-2 bottom-1 w-full">
        <button
          className="cursor-pointer group w-full flex items-center gap-3 px-3 py-5 rounded-md text-[13px] font-medium text-slate-300 hover:text-red-400 hover:bg-white/4 transition-all duration-150"
          onClick={() => alert("Logout functionality not implemented")}
        >
          <LogOutIcon className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10 cursor-pointer"
      >
        <MenuIcon size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-51 bg-black/50 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}

      <aside
        className={`lg:hidden fixed h-screen z-60 w-64 bg-linear-to-tr from-slate-900 via-slate-900 to-slate-950 text-white shadow-lg border-r border-white/10 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">{sidebarContent}</div>
      </aside>

      {/* Desktop sidebar */}

      <aside className="relative hidden lg:flex lg:flex-col lg:w-64 h-screen bg-linear-to-tr from-slate-900 via-slate-900 to-slate-950 text-white shadow-lg border-r border-white/10">
        <div className="p-4 ">{sidebarContent}</div>
      </aside>
    </>
  );
};

export default Sidebar;
