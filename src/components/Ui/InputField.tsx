/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface IProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  rules?: object;
}

const InputField = ({ label, type, placeholder, name, register, errors, rules }: IProps) => {
  const error = errors[name];

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type || "text"}
        id={name}
        {...register(name, rules)}
        className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-none focus:border-none 
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"}`}
        placeholder={placeholder}
      />

      {error && <p className="text-red-500 text-sm mt-1">{(error as any).message}</p>}
    </div>
  );
};

export default InputField;
