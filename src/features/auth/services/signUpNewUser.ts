import { supabase } from "../../../lib/supabaseClient";

async function signUpNewUser(email: string, password: string) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
    },
  });
}

export default signUpNewUser;
