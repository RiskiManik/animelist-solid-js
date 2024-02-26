import { AuthSession } from "@supabase/supabase-js";
import {
  JSX,
  createContext,
  createSignal,
  onMount,
  useContext,
} from "solid-js";
import getSession from "../features/auth/services/getSession";
import { supabase } from "../lib/supabaseClient";

export const AuthContex = createContext();

export const Provider = (props: { children: JSX.Element }) => {
  const [session, setSession] = createSignal<AuthSession | null>(null);
  // const navigate = useNavigate();
  onMount(async () => {
    const res = await getSession();
    setSession(res.data.session);
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <AuthContex.Provider value={{ session }}>
      {props.children}
    </AuthContex.Provider>
  );
};

export const useAuthContex = () => {
  const value = useContext(AuthContex);

  return value;
};
