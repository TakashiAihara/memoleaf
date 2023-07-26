import type { NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import AuthButton from "~/components/auth";

export const Home: NextPage = () => {
  const examples = api.example.all.useQuery();

  const utils = api.useContext();
  const { mutate: mutateExampleCreate, error } = api.example.create.useMutation(
    {
      async onSuccess() {
        await utils.example.all.invalidate();
      },
      async onError() {
        console.log(error);
      },
    },
  );

  const createExample = () => {
    mutateExampleCreate();
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create Example
          </h1>
          <AuthButton />
          <div>
            <button
              className="rounded-md bg-indigo-600 px-4 py-2 text-lg font-bold text-white hover:bg-indigo-500"
              onClick={createExample}
            >
              Create Example
            </button>
          </div>
          <div className="text-2xl text-white">
            {examples.data ? (
              examples.data?.length === 0 ? (
                <p>No examples found</p>
              ) : (
                examples.data?.map((example) => (
                  <p key={example.id}>{example?.id}</p>
                ))
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
