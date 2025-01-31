import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AvatarDefault from "/avatar-default.svg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logOut } from "@/services/authService"
import { Link } from "react-router"
import { IoMdInformationCircleOutline } from "react-icons/io"
import { IoLogOutOutline } from "react-icons/io5"
import { FaTasks } from "react-icons/fa"
import { memo } from "react"

const AvatarMenu = ({ avatarUrl }: { avatarUrl: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="p-1 border border-solid cursor-pointer border-slate-600 size-8 sm:size-10">
          <AvatarImage
            src={avatarUrl || AvatarDefault}
            alt="user avatar"
            referrerPolicy="no-referrer"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to={"/"} className="flex items-center w-full gap-x-2">
            <IoMdInformationCircleOutline />
            Information
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={"/tasks"} className="flex items-center w-full gap-x-2">
            <FaTasks />
            Tasks
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={logOut}
          className="flex items-center cursor-pointer gap-x-2"
        >
          <IoLogOutOutline />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(AvatarMenu)
