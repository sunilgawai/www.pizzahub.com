"use client";
import { LoginSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Button } from "../ui/button";

import { loginUser } from "@/server/auth.actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./card-wrapper";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = ({ callbackUrl }: { callbackUrl?: string }) => {
  const [isPending, setPending] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      setPending(true);
      const result = await signIn("credentials", {
        redirect: false,
        username: values.email,
        password: values.password,
      });
      console.log("result", result);
      if (!result?.ok) {
        toast({
          title: "Login Failed.",
          description: "Authentication Successfull.",
          variant: "default",
          action: <ToastAction altText="close toast">close</ToastAction>,
        });
        return;
      }

      setPending(false);
      router.push(callbackUrl ? callbackUrl : "/");
    } catch (error) {
      toast({
        title: "Login Success.",
        description: "Authentication Successfull.",
        variant: "default",
        action: <ToastAction altText="close toast">close</ToastAction>,
      });
    }
  };

  return (
    <CardWrapper
      headerLable="Welcome Back"
      backbuttonLable="Don't have an account?"
      backButtonHref="/signup"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message="" />
          <FormSuccess message="" />
          <Button type="submit" className="w-full" disabled={isPending}>
            Continue
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
