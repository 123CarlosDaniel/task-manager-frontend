import RedirectButton from "@/components/common/RedirectButton"
import SpinnerLoader from "@/components/common/SpinnerLoader"
import AvatarMenu from "@/components/common/AvatarMenu"
import { useAppSelector } from "@/hooks/redux"
import { Link } from "react-router"
import { useMemo } from "react"

const HomeNavbar = () => {
  const { loading, session } = useAppSelector((state) => state.auth)
  const avatarUrl = useMemo(
    () => session?.user.user_metadata.avatar_url,
    [session]
  )
  return (
    <div className="flex justify-between w-full px-6 align-middle">
      <Link to={"/"}>
        <h1 className="text-2xl font-semibold">Task Manager</h1>
      </Link>
      <div>
        {loading ? (
          <SpinnerLoader className="w-[50px]" />
        ) : session ? (
          <AvatarMenu avatarUrl={avatarUrl} />
        ) : (
          <RedirectButton label="Login" to="/auth/login" />
        )}
      </div>
    </div>
  )
}

export default HomeNavbar
