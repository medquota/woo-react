import Link from "next/link";
import CartIcon from "./cart/CartIcon";
import { useState } from "react";

const Nav = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <nav className="bg-blue px-4 py-2">
      <div className="flex items-center justify-between container mx-auto flex-wrap">
        {/*Menu button*/}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuVisibility(!isMenuVisible)}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white">
          <div className="font-semibold text-xl tracking-tight mb-1 mr-3">
            <Link href="/">
              <img
                className="cursor-pointer fill-current h-8 mr-2"
                src="https://www.pilore.com/wp-content/uploads/2022/02/LOGO.png"
              />
            </Link>
          </div>
        </div>
        <div className="flex nav-bag lg:hidden text-sm font-medium mb-6">
          <CartIcon />
        </div>

        {/*MMenu in mobile*/}
        <div
          className={`${
            isMenuVisible ? "max-h-full h-full" : "h-0"
          } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm font-medium uppercase lg:flex-grow ">
            <Link href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Home
              </a>
            </Link>
            <Link href="/categories">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Shop
              </a>
            </Link>
            <Link href="/posts">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Blog
              </a>
            </Link>
            <Link href="/policies">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Policies
              </a>
            </Link>
            <Link href="/contact-us">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
                Contact US
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block text-sm font-medium">
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
