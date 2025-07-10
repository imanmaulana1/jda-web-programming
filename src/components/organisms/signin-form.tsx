"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ButtonWithLoading } from "@/components/molecules/button-with-loading";
import { PasswordField } from "@/components/molecules/password-field";
import { TextField } from "@/components/molecules/text-field";
import { Form } from "@/components/ui/form";
import { LoginSchema, LoginSchemaType } from "@/schemas/auth.schema";

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      toast.success(`Welcome back, Noel! 👋`, {
        description: `Redirecting you to dashboard...`,
      });
    }, 1000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          control={form.control}
          name="email"
          label="Email"
          type="email"
          placeholder="john.doe@gmail.com"
          autoComplete="email"
        />
        <PasswordField
          control={form.control}
          name="password"
          label="Password"
          placeholder="*********"
          autoComplete="current-password"
        />
        <ButtonWithLoading
          type="submit"
          loading={isLoading}
          className="mt-2 w-full"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </ButtonWithLoading>
      </form>
    </Form>
  );
};
