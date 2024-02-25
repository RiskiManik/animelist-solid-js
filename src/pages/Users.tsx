import { AuthSession } from "@supabase/supabase-js";
import { createEffect, createSignal, type Component } from "solid-js";
import { Auth } from "../features/auth";
import { Account } from "../features/users";
import { supabase } from "../lib/supabaseClient";

const Users: Component = () => {
  const [session, setSession] = createSignal<AuthSession | null>(null);

  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <div class="container" style={{ padding: "50px 0 100px 0" }}>
      {!session() ? <Auth /> : <Account session={session()!} />}
    </div>
  );
};

export default Users;
