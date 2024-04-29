import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { HomeDashboard } from "@/components";

export default async function Home() {
  const session = await getServerSession();
  console.log(session,"---session---");
  return (
    <>
      <HomeDashboard />
    </>
  );
}
