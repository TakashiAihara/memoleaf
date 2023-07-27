import { Button, ButtonGroup } from "@chakra-ui/react";

import { signIn, signOut, useSession } from "@acme/auth/client";

export const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>
          Signed in as{" "}
          <span className="text-xl underline">{session.user.name}</span>
        </p>
        <Button colorScheme="red" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <p>Not signed in Github </p>
      <Button colorScheme="blue" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default AuthButton;
