import { createEffect, createSignal, onMount, type Component } from "solid-js";
import { AuthSession } from "@supabase/supabase-js";
import { useNavigate } from "@solidjs/router";
import { supabase } from "../lib/supabaseClient";
import getSession from "../features/auth/services/getSession";

const Home: Component = () => {
  const [session, setSession] = createSignal<AuthSession | null>(null);
  const navigate = useNavigate();

  onMount(async () => {
    const res = await getSession();
    setSession(res.data.session);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (!session()?.access_token) {
      navigate("/login", { replace: true });
    }
  });

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">{session()?.user.email}</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
