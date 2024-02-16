"use client";

import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center justify-center w-full gap-x-2">
      <Button size={"lg"} variant={"outline"} onClick={() => {}}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size={"lg"} variant={"outline"} onClick={() => {}}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Socials;
