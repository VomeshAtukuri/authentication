
// Use these when u want authentication response in the client
// "use client";
// import { useSession } from "next-auth/react";
// const session = useSession();
// console.log(session);

import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col items-center text-black">
      <p className="text-xl">User Authentication</p>
      {
        session ?
        <p>Logged in as {session?.user?.name || "Unknown user"}</p>
        :
        <p>Not logged in</p>
      }
    </div>
  );
}
