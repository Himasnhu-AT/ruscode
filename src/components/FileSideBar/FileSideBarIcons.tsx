import { ReactNode } from "react";

const SideBarIcon = ({ icon, label }: { icon: ReactNode; label: string }) => {
  return (
    <div className="flex flex-col items-center justify-between my-5">
      <div className="text-gray-300 hover:z-20 hover:text-white hover:scale-110">
        {icon}
        <div className="hidden hover:text-sm text-white">{label}</div>
      </div>
    </div>
  );
};

export default SideBarIcon;
