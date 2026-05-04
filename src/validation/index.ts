import zod from "zod";

const baseSchema = zod.object({
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
  joinDate: zod.string().refine((date) => new Date(date) <= new Date(), {
    message: "Join date cannot be in the future",
  }),
  bio: zod.string().trim().max(500).optional(),
  department: zod.string().nonempty("Department is required"),
  position: zod.string().trim().nonempty("Position is required"),
  basicSalary: zod
    .string()
    .trim()
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid number")
    .nonempty("Basic salary is required"),
  allowance: zod
    .string()
    .trim()
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid number")
    .nonempty("Allowance is required"),
  deductions: zod
    .string()
    .trim()
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid number")
    .nonempty("Deductions is required"),
  status: zod.enum(["ACTIVE", "APPROVED", "REJECTED", "PENDING", "PRESENT"]),
  workEmail: zod.string().trim().email().nonempty(),
  systemRole: zod.enum(["ADMIN", "EMPLOYEE"]),
});
export const ADD_EMPLOYEE_SCHEMA = baseSchema.extend({
  password: zod
    .string()
    .trim()
    .min(8)
    .regex(/(?=.*[A-Z])/)
    .regex(/(?=.*[a-z])/)
    .regex(/(?=.*\d)/)
    .regex(/(?=.*[@$!%*?&])/),
});

export const UPDATE_EMPLOYEE_SCHEMA = baseSchema.extend({
  password: zod
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .regex(/(?=.*[A-Z])/, "Must contain uppercase")
    .regex(/(?=.*[a-z])/, "Must contain lowercase")
    .regex(/(?=.*\d)/, "Must contain number")
    .regex(/(?=.*[@$!%*?&])/, "Must contain special char")
    .optional()
    .or(zod.literal("")), // 👈 يسمح بفاضي
});
