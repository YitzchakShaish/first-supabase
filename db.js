import { config } from "dotenv";

import { createClient } from "@supabase/supabase-js";

config()

const supabase = createClient(process.env.DB_URL, process.env.PABLIC_KEY)
console.log(process.env.DB_URL);


export default supabase