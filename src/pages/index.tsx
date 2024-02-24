import type { Component } from "solid-js";

const Home: Component = () => {
  return (
    <div>
      <h1>Home</h1>
      <a href="/users" class="text-blue-500 btn btn-link">
        {" "}
        Users
      </a>
    </div>
  );
};

export default Home;
