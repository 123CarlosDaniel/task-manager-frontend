import RedirectButton from "@/components/common/RedirectButton"

const AuthNavbar = () => {
  return (
    <div className="flex pt-8 ps-16">
      <RedirectButton to="/" label="Back" variant={"outlineGreen"}/>
    </div>
  )
}

export default AuthNavbar