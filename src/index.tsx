/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import "./index.css";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import "toastify-js/src/toastify.css";

import Users from "./pages/Users";
import Home from "./pages";
import MangaPage from "./pages/MangaPage";
import AnimePage from "./pages/AnimePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { Provider } from "./context/ContextProvider";
import "solid-slider/slider.css";

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
      <Provider>
        <Navbar />
        <Router>
          <Route path="/users" component={Users} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
          <Route path="/anime" component={AnimePage} />
          <Route path="/manga" component={MangaPage} />
        </Router>
        <SolidQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  ),
  root!
);
