import { Skeleton } from "@/components/ui/skeleton"

const FormSkeleton = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Skeleton className="w-[350px] h-8 m-auto" />
      <div className="space-y-2">
        <Skeleton className="w-[150px] h-6" />
        <Skeleton className="w-[350px] h-10" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-[150px] h-6" />
        <Skeleton className="w-[350px] h-10" />
      </div>
      <Skeleton className="w-[350px] h-6 m-auto" />
      <div className="flex gap-x-4">
        <Skeleton className="flex-1 h-8" />
        <Skeleton className="flex-1 h-8" />
      </div>
    </div>
  )
}

export default FormSkeleton