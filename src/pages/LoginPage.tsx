import { useNavigate } from "@solidjs/router";
import { Component, createSignal, onMount } from "solid-js";
import { signInWithEmail } from "../features/auth";
import Toastify from "toastify-js";
import { LoginBg } from "../assets";
import getSession from "../features/auth/services/getSession";

const LoginPage: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const navigation = useNavigate();

  onMount(async () => {
    const session = await getSession();
    if (session.data.session) {
      navigation("/");
    }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await signInWithEmail(email(), password());
      if (error) throw error;
      Toastify({
        text: "Sign In Successful, redirecting to home...",
        duration: 1500,
        callback: () => {
          navigation("/", { replace: true });
        },
      }).showToast();
    } catch (error) {
      if (error instanceof Error) {
        Toastify({
          text: error.message,
          duration: 3000,
        }).showToast();
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div class="flex  flex-col lg:flex-row mx-auto  lg:mb-12">
      <div class="w-full lg:w-3/5   overflow-hidden ">
        <img
          src={LoginBg}
          alt="login bg"
          class="w-full  object-cover h-full "
        />
      </div>
      <div class="w-full lg:w-2/5  pt-2 pb-8  backdrop-blur-md bg-white/15 px-6 lg:px-20 relative z-40 overflow-hidden">
        <div class="absolute -top-4 -right-10 bg-primary w-52 h-52 rounded-full blur-2xl opacity-70 p-4 z-0"></div>
        <div class="absolute -top-14 -left-20 bg-secondary w-52 h-52 rounded-full blur-xl opacity-70 p-4 z-0"></div>
        <div class="absolute -bottom-20 -left-20 bg-neutral w-44 h-44 rounded-full blur-2xl opacity-70 p-4 z-0"></div>
        <div class=" lg:pt-12 pb-4 lg:pb-8">
          <div class="divider pb-2"></div>
          <h1 class=" text-xl lg:text-2xl font-semibold pb-2  text-primary-content relative z-20">
            Sign In to Sakur<span class="text-error">A</span>nime
          </h1>
          <p class="text-xs lg:text-sm font-normal relative z-20">
            Don't have an account?
            <a href="/signup" class="link link-error ml-2 font-medium">
              sign up
            </a>
          </p>
          <div class="divider pt-2"></div>
        </div>

        <form
          class="flex flex-col gap-4 lg:gap-6 w-full relative z-20"
          onSubmit={handleSubmit}
        >
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              class="grow"
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </label>

          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="password"
              class="grow "
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </label>
          <button type="submit" class="btn btn-error  " disabled={loading()}>
            {loading() ? "Loading..." : "Login"}
          </button>
        </form>
        <div class="divider pt-2"></div>
      </div>
    </div>
  );
};

export default LoginPage;
