/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldError, UseFormRegister } from "react-hook-form";

interface IProps {
  options: string[];
  label?: string;
  id?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const Select = ({ options, label, id, name, register, error }: IProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <select
        id={id || name}
        {...register(name)}
        className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-indigo-500"}`}
      >
        <option value="">Select...</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Select;
