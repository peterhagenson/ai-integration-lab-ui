import { createContext, useContext, createSignal } from "solid-js";

const menuContext = createContext();

export const Provider = (props: any) => {
  const [menuIsOpen, setMenuIsOpen] = createSignal(false);
  return (
  <menuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
    {props.children}
  </menuContext.Provider>
  );
}

export const useMenuContext: any = () => {
  const context = useContext(menuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
}