import { supabase } from "../../../lib/supabaseClient";

async function signOut() {
  return await supabase.auth.signOut();
}

export default signOut;
