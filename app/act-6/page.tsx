import Card from "./Card";
async function fetchData() {
  const res = await fetch("https://random-data-api.com/api/v2/users?size=20", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}

export default async function CardList() {
  const users = await fetchData();
  return (
    <div className="w-full h-full flex flex-wrap gap-4 justify-center p-4 overflow-auto pb-32">
      {users?.map((user: any) => {
        return <Card user={user} key={user?.id} />;
      })}
    </div>
  );
}
