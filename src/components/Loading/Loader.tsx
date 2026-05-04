import { Loader } from "lucide-react";

const LoaderComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="animate-spin" size={48} />
    </div>
  );
};

export default LoaderComponent;
