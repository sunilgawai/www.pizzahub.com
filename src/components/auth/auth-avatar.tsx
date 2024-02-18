"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthAvatar = () => {
  const { data: session } = useSession();
  const avatarImage = (session && session.user?.image) || "";

  const avatarFallBackName =
    (session && session.user.first_name?.charAt(0)) || "X";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={avatarImage} alt="@shadcn" />
            <AvatarFallback>{avatarFallBackName.toUpperCase()}</AvatarFallback>

            {/* <AvatarFallback>
              `{session?.user.first_name?.charAt(0)}{" "}
              {session?.user.last_name?.charAt(0)}`
            </AvatarFallback> */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {session && (
          <DropdownMenuLabel className="font-normal">
            {/* <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                {session.user.name && <p className="font-medium">{session.user.name}</p>}
                {session.user.email && (
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    {session.user.email}
                  </p>
                )}
              </div>
            </div> */}
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user?.name}
              </p>
              <p className="text-base leading-none text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        {!session ? (
          <DropdownMenuGroup>
            <Link href="/signin">
              <DropdownMenuItem>Login</DropdownMenuItem>
            </Link>
            <Link href="/signup">
              <DropdownMenuItem>Register</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        ) : (
          <DropdownMenuGroup>
            <Link href="/account">
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href="/dashboard">
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        )}
        {/* <DropdownMenuSeparator /> */}
        {/* <ToggleTheme /> */}
        <DropdownMenuSeparator />
        {session && (
          <Link href="/api/auth/signout">
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthAvatar;
