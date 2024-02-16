"use client";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  backbuttonLable: string;
  backButtonHref: string;
  showSocial?: boolean;
}

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "./header";
import Socials from "./socials";
import BackButton from "./back-button";

const CardWrapper: React.FC<CardWrapperProps> = ({
  backButtonHref,
  backbuttonLable,
  children,
  headerLable,
  showSocial,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLable} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backbuttonLable} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
