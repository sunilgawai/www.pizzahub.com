import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AuthAvatar from "./auth/auth-avatar";

export function SiteHeader() {
  return (
    <header className="backdrop-blur-sm bg-white/30 fixed top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="inline-block font-bold">Eat Fresh</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href={"/menus"}
              className="flex items-center text-base font-semibold text-muted-foreground mx-4"
            >
              Menus
            </Link>
            <Link href={"/wishlist"}>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.wishlist className="h-5 w-5" />
              </div>
            </Link>
            <Link href={"/cart"}>
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.cart className="h-5 w-5" />
              </div>
            </Link>
            <AuthAvatar />
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
