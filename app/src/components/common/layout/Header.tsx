import { Link } from "@tanstack/solid-router";
import { CgMenu } from 'solid-icons/cg'
import type { Component } from "solid-js";

export const Header: Component = () => {
 
  return (
    <header class="flex flex-row justify-between items-center w-full h-17 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 opacity-85">
        <div class="pl-6">
            <CgMenu size={30} class="text-white" />
        </div>
      <div>
        <h1 class="font-bold text-3xl text-white">AI Integration Lab</h1>
      </div>
      <div class="pr-6 text-white font-bold">
        <Link to="/" class="pr-6">
          Blog
        </Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}
