import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XIcon } from "lucide-react";

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  description: string;
  onClose: () => void;
}

const EmployeeDialog = ({ isOpen, children, title, description, onClose }: IProps) => {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative max-w-lg md:min-w-4xl max-h-[90vh] overflow-y-auto space-y-4 bg-white p-8 rounded-md">
            <XIcon
              onClick={onClose}
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition"
            />
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <Description>{description}</Description>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default EmployeeDialog;
