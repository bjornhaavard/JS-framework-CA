"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import useCartStore from "../../store/userCartStore";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
}
import Link from "next/link";

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" className="flex shrink-0 items-center font-extrabold">
              <Image
                aria-label="BuyAll"
                src="/images/BuyAll.png"
                alt="BuyAll Logo"
                width={40}
                height={24}
                quality={80}
                className="h-8 w-auto rounded-lg" // Adjusted height to control the size
              />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={classNames(pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mx-4"></div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => (window.location.href = "/checkout")}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View cart</span>
              <ShoppingCartIcon aria-hidden="true" className="size-6" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-800 rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    aria-label="User"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link href="/profile/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Your Profile
                  </Link>
                </MenuItem>

                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={classNames(pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default NavBar;

// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
// import { classNames } from '@/utils/classNames'
// import Link from 'next/link'
// import { useRouter } from 'next/router'

// function Navigation() {
//   const router = useRouter()
//   const pathname = router.pathname

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   return (
//     <div className="bg-gray-800">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               {/* Logo here */}
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={classNames(
//                       (item.href === '/' && pathname === '/') ||
//                         (item.href !== '/' && pathname.startsWith(item.href))
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "rounded-md px-3 py-2 text-sm font-medium"
//                     )}
//                     aria-current={(item.href === '/' && pathname === '/') ||
//                       (item.href !== '/' && pathname.startsWith(item.href)) ? "page" : undefined}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             {/* Mobile menu button */}
//           </div>
//         </div>
//       </nav>
//       <Disclosure as="nav" className="md:hidden">
//         {({ open }) => (
//           <>
//             <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               {/* Menu icon */}
//             </DisclosureButton>
//             <DisclosurePanel className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     (item.href === '/' && pathname === '/') ||
//                       (item.href !== '/' && pathname.startsWith(item.href))
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-medium"
//                   )}
//                   aria-current={(item.href === '/' && pathname === '/') ||
//                     (item.href !== '/' && pathname.startsWith(item.href)) ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </DisclosurePanel>
//           </>
//         )}
//       </Disclosure>
//     </div>
//   )
// }

// export default Navigation
