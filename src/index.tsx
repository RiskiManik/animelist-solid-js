/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import {
  QueryClient,
  QueryClientProvider,
  createQuery,
} from "@tanstack/solid-query";
import "./index.css";
import App from "./App";
import Users from "./pages/Users";
import Home from "./pages";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}
const queryClient = new QueryClient();
render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
      </Router>
      <SolidQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ),
  root!
);
