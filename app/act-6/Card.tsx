import Image from "next/image";

export default function Card({ user }: { user: any }) {
  return (
    <div className="flex flex-col gap-4 border rounded-md p-4 w-fit max-w-[300px]">
      <div className="rounded-md overflow-hidden shadow-md">
        <Image
          src={user?.avatar}
          alt={user?.first_name + user?.last_name}
          width={300}
          height={300}
          className="aspect-square"
        />
      </div>
      <div className="flex-col flex flex-1">
        <p className="font-bold">
          {user?.first_name} {user?.last_name}
        </p>
        <div className="text-muted-foreground text-xs sm:text-sm">
          <p>{user?.email}</p>
          <p>{user?.gender}</p>
          <p>{user?.date_of_birth}</p>
        </div>
      </div>
    </div>
  );
}
