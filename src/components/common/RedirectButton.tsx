import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"

const RedirectButton = ({
  to,
  label,
  className,
}: {
  to: string
  label: string
  className?: string
}) => {
  const navigate = useNavigate()
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onClick={() => navigate(to)}
      className={className}
    >
      {label}
    </Button>
  )
}

export default RedirectButton
