import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

import { api } from "~/utils/api";
import Home from "./index";

test("home", async () => {
  const HomeWithTRPC = api.withTRPC(Home);
  render(<HomeWithTRPC />);
  const title = within(await screen.findByText("T3"));
  expect(title).toBeDefined();
});
