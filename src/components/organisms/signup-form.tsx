"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ButtonWithLoading } from "@/components/molecules/button-with-loading";
import { PasswordField } from "@/components/molecules/password-field";
import { TextField } from "@/components/molecules/text-field";
import { Form } from "@/components/ui/form";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/auth.schema";

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      toast.success("Your account has been created! ✨", {
        description: "You can now login with your credentials",
      });

      form.reset();
    }, 1000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          control={form.control}
          name="fullName"
          label="Full Name"
          type="text"
          placeholder="John Doe"
        />
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
        <PasswordField
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="*********"
          autoComplete="off"
        />
        <ButtonWithLoading
          type="submit"
          loading={isLoading}
          className="mt-2 w-full"
        >
          {isLoading ? "Signing up..." : "Sign up"}
        </ButtonWithLoading>
      </form>
    </Form>
  );
};
