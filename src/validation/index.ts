import zod from "zod";
export const ADD_EMPLOYEE_SCHEMA = zod
  .object({
    firstName: zod
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .nonempty("First name is required"),
    lastName: zod
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .nonempty("Last name is required"),
    joinDate: zod.date().refine((date) => date <= new Date(), {
      message: "Join date cannot be in the future",
    }),
    bio: zod.string().trim().max(500, "Bio cannot exceed 500 characters").optional(),
    department: zod.string().nonempty("Department is required"),
    position: zod.string().trim().nonempty("Position is required"),
    basicSalary: zod
      .string()
      .trim()
      .regex(/^\d+(\.\d{1,2})?$/, "Basic salary must be a valid number")
      .nonempty("Basic salary is required"),
    allowance: zod
      .string()
      .trim()
      .regex(/^\d+(\.\d{1,2})?$/, "Allowance must be a valid number")
      .nonempty("Allowance is required"),
    deductions: zod
      .string()
      .trim()
      .regex(/^\d+(\.\d{1,2})?$/, "Deductions must be a valid number")
      .nonempty("Deductions is required"),
    status: zod.enum(["ACTIVE", "APPROVED", "REJECTED", "PENDING", "PRESENT"], {
      message: "Status must be one of ACTIVE, APPROVED, REJECTED, PENDING, or PRESENT",
    }),
    workEmail: zod.string().trim().email("Invalid email format").nonempty("Work email is required"),
    systemRole: zod.enum(["ADMIN", "EMPLOYEE"], {
      message: "System role must be either ADMIN or EMPLOYEE",
    }),
    password: zod
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
      .regex(/(?=.*[a-z])/, "Password must contain at least one lowercase letter")
      .regex(/(?=.*\d)/, "Password must contain at least one number")
      .regex(/(?=.*[@$!%*?&])/, "Password must contain at least one special character"),
  })
  .required();
