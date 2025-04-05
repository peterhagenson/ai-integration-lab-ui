import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/posts/"!</div>;
}
