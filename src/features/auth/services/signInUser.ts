import { supabase } from "../../../lib/supabaseClient";

async function signInWithEmail(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export default signInWithEmail;
