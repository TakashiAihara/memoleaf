export { default } from "next-auth";
export { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export const providers = ["github"] as const;
export type OAuthProviders = (typeof providers)[number];
