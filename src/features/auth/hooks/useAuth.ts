import { AuthSession } from "@supabase/supabase-js";
import { supabase } from "../../../lib/supabaseClient";
import { createEffect, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

const useAuth = () => {
  const navigate = useNavigate();
  const [session, setSession] = createSignal<AuthSession | null>(null);
  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  if (!session()) {
    navigate("/login", { replace: true });
    return null;
  }
  return session();
};

export default useAuth;
