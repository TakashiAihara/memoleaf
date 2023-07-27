import "~/styles/globals.css";

import type { AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { SessionProvider } from "@acme/auth/client";
import { type Session } from "@acme/auth/types";

import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
