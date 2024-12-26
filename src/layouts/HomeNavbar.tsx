import RedirectButton from "@/components/common/RedirectButton"
import SpinnerLoader from "@/components/common/SpinnerLoader"
import AvatarMenu from "@/components/common/AvatarMenu"
import { useAppSelector } from "@/hooks/redux"

const HomeNavbar = () => {
  const { loading, session } = useAppSelector((state) => state.auth)
  return (
    <div className="flex justify-between w-full px-6 align-middle">
      <h1 className="text-2xl font-semibold">Task Manager</h1>

      <div>
        {loading ? (
          <SpinnerLoader className="w-[50px]" />
        ) : session ? (
          <AvatarMenu avatarUrl={session.user.user_metadata.avatar_url} />
        ) : (
          <RedirectButton label="Login" to="/auth/login" />
        )}
      </div>
    </div>
  )
}

export default HomeNavbar
