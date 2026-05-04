import { Pencil, Trash } from "lucide-react";
import type { dummyEmployeeData } from "../../data/dummyData";

interface EmployeeCardProps {
  data: (typeof dummyEmployeeData)[0];
  onDelete: (id: string) => void;
  onEdit: (data: (typeof dummyEmployeeData)[0]) => void;
}

const EmployeeCard = ({ data, onDelete, onEdit }: EmployeeCardProps) => {
  return (
    <div className="group relative card card-hover overflow-hidden">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-50">
        {/* Circle Icons */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="size-20 rounded-full bg-linear-to-br from-indigo-100 to-slate-100 flex items-center justify-center">
            <span className="text-lg font-bold text-indigo-600">
              {data.firstName.charAt(0)} {data.lastName.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-3 left-3 flex gap-2">
        <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-slate-600 rounded-md shadow-sm">
          {data.department || "Remote"}
          {data.isDeleted && <span className="ml-1 text-red-500 font-bold">Deleted</span>}
        </span>
      </div>

      {!data.isDeleted && (
        <div className="absolute inset-0 bg-linear-to-t from-indigo-700/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-start justify-end p-3 gap-2">
          <button
            onClick={() => onEdit(data)}
            className="size-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-gray-800 transition"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => onDelete(data._id)}
            className="size-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-gray-800 transition"
          >
            <Trash size={14} />
          </button>
        </div>
      )}

      <div className="p-5">
        <h3 className="text-slate-900">{`${data.firstName} ${data.lastName}`}</h3>
        <p className="text-sm text-gray-500">{data.position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
