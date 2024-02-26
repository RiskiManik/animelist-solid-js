import { supabase } from "../../../lib/supabaseClient";

const getSession = async () => {
  const res = await supabase.auth.getSession();
  return res;
};

export default getSession;
