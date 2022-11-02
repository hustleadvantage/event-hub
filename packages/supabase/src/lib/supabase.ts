import { createClient } from '@supabase/supabase-js';

export const create = (props: Supabase.Config) =>
  createClient(props.url, props.key);
