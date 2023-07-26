import { signIn, signOut, useSession } from "@acme/auth/client";

export const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p className="text-white">
          Signed in as{" "}
          <span className="text-xl underline">{session.user.name}</span>
        </p>
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <p className="text-white">Not signed in Github </p>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
};

export default AuthButton;
