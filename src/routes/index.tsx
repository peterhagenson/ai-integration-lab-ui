import { createFileRoute } from "@tanstack/solid-router";
// import { useMenuContext } from "../context/menuContext";
import { Home } from "../components/Home";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  // const { menuIsOpen } = useMenuContext();
  return <div>
    <Home />
  </div>;
}
