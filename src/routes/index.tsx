import { createFileRoute } from "@tanstack/solid-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <div></div>;
}
