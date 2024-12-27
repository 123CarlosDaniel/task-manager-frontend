import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"

const RedirectButton = ({
  to,
  label,
  className,
  variant = "outline",
}: {
  to: string
  label: string
  className?: string
  variant?: any
}) => {
  const navigate = useNavigate()
  return (
    <Button
      variant={variant}
      size={"sm"}
      onClick={() => navigate(to)}
      className={className}
    >
      {label}
    </Button>
  )
}

export default RedirectButton
