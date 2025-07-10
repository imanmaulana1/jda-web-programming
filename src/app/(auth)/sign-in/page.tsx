import { AuthFooter } from "@/components/molecules/auth-footer";
import { AuthHeader } from "@/components/molecules/auth-header";
import { SignInForm } from "@/components/organisms/signin-form";
import { AuthLayout } from "@/components/templates/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout
      header={
        <AuthHeader
          title="Welcome Back 👋"
          desc="Please enter your details to sign in"
        />
      }
      footer={
        <AuthFooter
          prompt="Don't have an account? "
          linkText="Sign Up"
          linkHref="/sign-up"
        />
      }
    >
      <SignInForm />
    </AuthLayout>
  );
}
