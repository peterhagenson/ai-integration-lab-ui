import { Link } from "@tanstack/solid-router";
// import { IoMenuSharp } from 'solid-icons/io'
import { useMenuContext } from '../../../context/menuContext';

export function Header() {

// const { menuIsOpen, setMenuIsOpen } = useMenuContext();

// const handleMenuClick = () => {
//   setMenuIsOpen(!menuIsOpen());
// }

  return (
    <header class="flex flex-row justify-between items-center w-full h-17 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 opacity-85">
      {/* <div class="pl-6">
        <IoMenuSharp class='fill-white size-8' onClick={() => handleMenuClick()} />
      </div> */}
      <div class='pl-6'>
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
