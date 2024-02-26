import { Component } from "solid-js";
import { signOut } from "../features/auth";
import Toastify from "toastify-js";
const Navbar: Component = () => {
  const hadleSignOut = async () => {
    try {
      await signOut();
    } catch (error: any) {
      Toastify({
        text: error.message,
        duration: 1500,
      });
    } finally {
      window.location.reload();
    }
  };

  return (
    <div class="px-10 py-5">
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <h1 class=" text-2xl text-neutral font drop-shadow-sm font-bold ">
            SakurAnime
          </h1>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button
                  onClick={hadleSignOut}
                  class="link link-hover text-error"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
