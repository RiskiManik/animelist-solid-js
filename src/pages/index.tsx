import { createEffect, createSignal, onMount, type Component } from "solid-js";
import { AuthSession } from "@supabase/supabase-js";
import { useNavigate } from "@solidjs/router";
import { supabase } from "../lib/supabaseClient";
import getSession from "../features/auth/services/getSession";
import CarouselAnime from "../features/anime/components/CarouselAnime";

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
    <div class="min-h-screen bg-base-100">
      <CarouselAnime />
    </div>
  );
};

export default Home;
