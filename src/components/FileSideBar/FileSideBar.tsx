import {
  CircleUserRoundIcon,
  File,
  GitBranchIcon,
  PlayIcon,
  Search,
  Settings2,
  SettingsIcon,
} from "lucide-react";
import { ReactNode } from "react";
import SideBarIcon from "./FileSideBarIcons";

const FileSideBar = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div>
        <SideBarIcon icon={<File size={40} />} label="Files" />
        <SideBarIcon icon={<Search size={40} />} label="Search" />
        <SideBarIcon icon={<GitBranchIcon size={40} />} label="Branch" />
        <SideBarIcon icon={<PlayIcon size={40} />} label="Play" />
        {/* <File size={40} />
        <Search size={40} />
        <GitBranchIcon size={40} />
        <PlayIcon size={40} /> */}
      </div>

      <div>
        <SideBarIcon icon={<CircleUserRoundIcon size={40} />} label="User" />
        <SideBarIcon icon={<SettingsIcon size={40} />} label="Settings" />
        {/* <CircleUserRoundIcon size={40} />
        <SettingsIcon size={40} /> */}
      </div>
    </div>
  );
};

export default FileSideBar;
