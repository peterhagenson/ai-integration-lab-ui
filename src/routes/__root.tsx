import { Outlet, createRootRouteWithContext } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { Header } from "../components/common/layout/Header";
// import { Provider } from "../context/menuContext";

export const Route = createRootRouteWithContext()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
    {/* <Provider> */}
      <Header />
      <Outlet />
    {/* </Provider> */}
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
