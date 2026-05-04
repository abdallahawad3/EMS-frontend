interface IProps {
  label?: string;
  placeholder?: string;
  id?: string;
  rows?: number;
}

const Textarea = ({ label, placeholder, id, rows }: IProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder={placeholder}
        rows={rows ? rows : 3}
      />
    </div>
  );
};

export default Textarea;
