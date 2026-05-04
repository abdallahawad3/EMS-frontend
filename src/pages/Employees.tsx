/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import { DEPARTMENTS, dummyEmployeeData } from "../data/dummyData";
import LoaderComponent from "../components/Loading/Loader";
import { Plus } from "lucide-react";
import EmployeeCard from "../components/Employee/EmployeeCard";
import EmployeeDialog from "../components/Employee/EmployeeDialog";
import InputField from "../components/Ui/InputField";
import Textarea from "../components/Ui/Textarea";
import Select from "../components/Ui/Select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ADD_EMPLOYEE_SCHEMA, UPDATE_EMPLOYEE_SCHEMA } from "../validation";
import type z from "zod";
import PhoneNumber from "../components/Ui/PhoneNumber";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<typeof dummyEmployeeData | null>(null);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState<(typeof dummyEmployeeData)[0] | null>(null);
  const [phone, setPhone] = useState("");
  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setEmployees(
      dummyEmployeeData.filter((emp) =>
        selectedDepartment ? emp.department === selectedDepartment : emp,
      ),
    );
    setLoading(false);
  }, [selectedDepartment]);

  useEffect(() => {
    setEmployees(dummyEmployeeData);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const filteredEmployees = employees
    ? employees.filter((emp) =>
        `${emp.firstName} ${emp.lastName} ${emp.position}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      )
    : [];

  const handleDelete = (id: string) => {
    console.log(id);
  };
  const handleEdit = (data: any) => {
    setEditData(data);

    reset({
      firstName: data.firstName,
      lastName: data.lastName,
      joinDate: data.joinDate, // 👈 هنظبطها تحت
      department: data.department,
      position: data.position,
      basicSalary: data.basicSalary.toString(),
      allowance: data.allowances.toString(),
      deductions: data.deductions.toString(),
      workEmail: data.email,
      status: data.employmentStatus,
      systemRole: data.userId.role,
      password: "", // مهم
    });

    setPhone(data.phone);
    setIsOpen(true);
  };

  const handleClose = () => {
    setEditData(null);
    setPhone("");
    setValues({
      firstName: "",
      lastName: "",
      joinDate: "",
      department: "",
      position: "",
      basicSalary: "",
      allowance: "",
      deductions: "",
      workEmail: "",
      status: "ACTIVE",
      systemRole: "EMPLOYEE",
      bio: "",
      password: "",
    }); // 👈 بنظف الفورم
    setIsOpen(false);
  };

  const schema = editData ? UPDATE_EMPLOYEE_SCHEMA : ADD_EMPLOYEE_SCHEMA;
  const {
    register,
    handleSubmit,
    reset,
    setValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => console.log(data);

  if (loading) return <LoaderComponent />;

  return (
    <div className="animate-fade-in">
      {/* ---- Header ----  */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="page-title">Employees</h1>
          <p className="page-subtitle">Manage your employees and their details</p>
        </div>
        <button
          className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center "
          onClick={() => setIsOpen(true)}
        >
          <Plus size={16} className="mr-1" />
          Add Employee
        </button>
      </div>
      {/* ---- SearchBar ---- */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search employees..."
          className="input-primary flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="input-primary w-full sm:w-auto"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      {/* ---- Employee List ---- */}
      {loading ? (
        <div className="flex justify-center p-12">
          <div className="animate-pulse size-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredEmployees.length == 0 ? (
            <p className="text-gray-500 col-span-full text-center">No employees found.</p>
          ) : (
            filteredEmployees.map((emp) => (
              <EmployeeCard key={emp._id} data={emp} onDelete={handleDelete} onEdit={handleEdit} />
            ))
          )}
        </div>
      )}

      {/* Show Create Employee Form */}
      {isOpen && (
        <EmployeeDialog
          isOpen={isOpen}
          onClose={handleClose}
          title={`${editData ? "Update" : "Create"} Employee`}
          description={`Fill in the details to ${editData ? "update" : "create"} an employee.`}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
            <div className="border border-gray-300 rounded p-4 space-y-4">
              <p className="font-semibold">Personal Information</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <InputField
                  name="firstName"
                  register={register}
                  errors={errors}
                  label="First Name"
                  id="firstName"
                  placeholder="Enter first name"
                />
                <InputField
                  name="lastName"
                  register={register}
                  errors={errors}
                  label="Last Name"
                  id="lastName"
                  placeholder="Enter last name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <InputField
                  name="joinDate"
                  register={register}
                  errors={errors}
                  label="Join Date"
                  id="joinDate"
                  placeholder="Select join date"
                  type="date"
                />
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <PhoneNumber phone={phone} setPhone={setPhone} />
                </div>
              </div>
              <Textarea label="Bio (optional)" id="bio" placeholder="Enter bio" rows={4} />
            </div>
            {/* Employees Details */}
            <div className="border border-gray-300 rounded p-4 space-y-4">
              <p className="font-semibold">Employee Details</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Select
                  label="Department"
                  id="department"
                  name="department"
                  options={DEPARTMENTS}
                  register={register}
                  error={errors.department}
                />
                <InputField
                  name="position"
                  register={register}
                  errors={errors}
                  label="Position"
                  id="position"
                  placeholder="Enter position"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <InputField
                  name="basicSalary"
                  register={register}
                  errors={errors}
                  label="Basic Salary"
                  id="basicSalary"
                  placeholder="Enter basic salary"
                  type="string"
                />
                <InputField
                  name="allowance"
                  register={register}
                  errors={errors}
                  label="Allowance"
                  id="allowance"
                  placeholder="Enter allowance"
                  type="string"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <InputField
                  name="deductions"
                  register={register}
                  errors={errors}
                  label="Deductions"
                  id="deductions"
                  placeholder="Enter deductions"
                />
                <Select
                  name="employmentStatus"
                  label="Status"
                  id="status"
                  options={["ACTIVE", "APPROVED", "REJECTED", "PENDING", "PRESENT"]}
                  register={register}
                  error={errors.status}
                />
              </div>
            </div>
            {/* Employee Setup */}
            <div className="border border-gray-300 rounded p-4 space-y-4">
              <p className="font-semibold">Account Setup</p>
              <div className="grid grid-cols-1">
                <InputField
                  name="workEmail"
                  register={register}
                  errors={errors}
                  label="Work Email"
                  id="workEmail"
                  placeholder="Enter work email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <InputField
                  name="password"
                  register={register}
                  errors={errors}
                  label={editData ? "New Password (optional)" : "Password"}
                  id="password"
                  placeholder="Enter password"
                  type="password"
                />
                <Select
                  register={register}
                  error={errors.systemRole}
                  name="systemRole"
                  label="System Role"
                  id="systemRole"
                  options={["ADMIN", "EMPLOYEE"]}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded hover:from-indigo-600 hover:to-indigo-600/70 transition cursor-pointer"
              >
                {editData ? "Update Employee" : "Create Employee"}
              </button>
              {editData && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </EmployeeDialog>
      )}
    </div>
  );
};

export default EmployeesPage;
