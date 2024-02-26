import { Component, createSignal } from "solid-js";
import { signUpNewUser } from "../features/auth";
import Toastify from "toastify-js";
import { A, useNavigate } from "@solidjs/router";
import { LoginBg } from "../assets";

const SignUp: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const navigation = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await signUpNewUser(email(), password());
      if (error) throw error;
      Toastify({
        text: "Sign Up Successful, Check your email for verification. and Login",
        duration: 3000,
        onClick: () => {
          navigation("/login", { replace: true });
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
    <div class="w-1/3  mx-auto outline outline-1 outline-primary px-8 pt-2 pb-8 rounded-2xl shadow-md mb-32 bg-primary">
      <div class=" pt-4 rounded-lg overflow-hidden">
        <img src={LoginBg} alt="login bg" class="w-full  object-cover h-52 " />
      </div>

      <h1 class="text-3xl font-bold py-4 text-primary-content text-center">
        Sign Up
      </h1>
      <form class="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
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
            class="grow"
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        <button type="submit" class="btn btn-neutral" disabled={loading()}>
          {loading() ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <p class="py-2 text-center font-medium">
        Already have an account?
        <A href="/login" class="link link-neutral">
          login
        </A>
      </p>
    </div>
  );
};

export default SignUp;
