import {createClient} from "@supabase/supabase-js";

//Password: gPlKfQUccWHXXrwO;

// Api eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlemN4Z3hicHR3ZmJ0YWl6d3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1NDc3NDYsImV4cCI6MTk5ODEyMzc0Nn0.v40F44l8CkUe-PKVl33dy_8mwaQdADAIfHZjuNBToWs
// Url https://uezcxgxbptwfbtaizwvs.supabase.co


const supabase = createClient(
    "https://uezcxgxbptwfbtaizwvs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlemN4Z3hicHR3ZmJ0YWl6d3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1NDc3NDYsImV4cCI6MTk5ODEyMzc0Nn0.v40F44l8CkUe-PKVl33dy_8mwaQdADAIfHZjuNBToWs"
);

export default supabase;
