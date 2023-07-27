import type { NextPage } from "next";
import Head from "next/head";

import { useSession } from "@acme/auth/client";

import AuthButton from "~/components/AuthButton";
import DiarySection from "~/components/DiarySection";

export const Home: NextPage = () => {
  const session = useSession();

  return (
    <>
      <Head>
        <title>MemoLeaf - Write a diary and grow Memory Leaves.</title>
        <meta
          name="description"
          content="This is a developer-only diary service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            MemoLeaf
          </h1>
          <h2 className="text-xl tracking-tight">
            Write a diary and grow Memory Leaves.
          </h2>
          <AuthButton />
          {session?.data ? <DiarySection /> : <p>Please sign in!!</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
