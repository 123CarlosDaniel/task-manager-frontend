import { Skeleton } from "../ui/skeleton"

const TasksSkeleton = () => {
  return (
    <div className="grid grid-cols-1 pt-6 pb-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-12">
      {
        Array(6).fill(0).map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="w-full h-[30px]" />
            <Skeleton className="w-full h-[150px]" />            
          </div>
        ))
      }

    </div>
  )
}

export default TasksSkeleton