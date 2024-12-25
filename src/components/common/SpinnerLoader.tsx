import { cn } from "@/lib/utils"


const SpinnerLoader = ({className}: {className?: string}) => {
  return (
    <div className={cn("w-[50px]", className)}>
      <img src="/tube-spinner.svg" />
    </div>
  )
}

export default SpinnerLoader
