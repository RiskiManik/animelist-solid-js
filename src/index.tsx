/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import "./index.css";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";

import Users from "./pages/Users";
import Home from "./pages";
import MangaPage from "./pages/MangaPage";
import AnimePage from "./pages/AnimePage";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <Router>
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
        <Route path="/anime" component={AnimePage} />
        <Route path="/manga" component={MangaPage} />
      </Router>
      <SolidQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  ),
  root!
);
