import { Skeleton } from "./ui/skeleton";

type LoaderProps = {
  length?: number;
}

export default function Loader({ length = 10 }: LoaderProps) {
  return (
    <div className="flex flex-col items-center w-full gap-4 flex-wrap mt-10">
      {[...Array(length)].map((_, index) => (
        <div
          key={index}
          className="w-full max-w-[800] max-h-20 border border-gray-200 rounded-md"
        >
          <div className="flex justify-between items-center space-x-4 p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div>
                <Skeleton className="w-24 h-6 rounded-sm" />
                <Skeleton className="w-32 h-4 rounded-sm mt-2" />
              </div>
            </div>
            <Skeleton className="w-20 h-10 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  )
}