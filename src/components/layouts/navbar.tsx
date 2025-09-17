'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/base-ui/navigation-menu';
import { Link } from '@/ui/link';

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                unstyled
                href="/"
              />
            }
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid list-none grid-cols-1 xs:grid-cols-[12rem_12rem] gap-0">
              <li>
                <NavigationMenuLink>Link 1</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 2</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 3</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 4</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 5</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 6</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid list-none grid-cols-1 xs:grid-cols-[12rem_12rem] gap-0">
              <li>
                <NavigationMenuLink>Link 1</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 2</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 3</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 4</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 5</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink>Link 6</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                unstyled
                href="/about"
              />
            }
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                unstyled
                href="/contact"
              />
            }
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { Navbar };
