import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity 1",
  description: "Center “Hello World” in the middle of the browser window.",
};
export default function Home() {
  return (
    <div className="w-full h-full flex">
      <p className="m-auto text-2xl font-bold">Hello World!</p>
    </div>
  );
}
