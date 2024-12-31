import { getAllUsers } from "@/services/getAllUsers"
import { useInfiniteQuery } from "@tanstack/react-query"
import UserCard from "./user-card";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Loader from "./loader";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export default function Users() {
  const { ref, inView } = useInView();

  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isSuccess,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['users'],
    initialPageParam: "",
    queryFn: ({ pageParam }) => getAllUsers({ take: 10, lastCursor: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage?.metaData.lastCursor;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="flex flex-col items-center w-full gap-4 flex-wrap mt-10">
      {isSuccess && data?.pages.map((page) => {
        return page.data.map((user: User) => {
          return (
            <div
              ref={ref}
              key={user.id}
              className="flex flex-col w-full items-center"
            >
              <UserCard
                name={user.name}
                email={user.email}
                avatar={user.avatar}
              />
            </div>
          )
        })
      })}

      {(isLoading || isFetchingNextPage) && <p className="mb-4">Loading...</p>}
    </div>
  )
}