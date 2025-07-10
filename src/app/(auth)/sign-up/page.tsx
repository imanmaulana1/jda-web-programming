import { AuthFooter } from "@/components/molecules/auth-footer";
import { AuthHeader } from "@/components/molecules/auth-header";
import { SignUpForm } from "@/components/organisms/signup-form";
import { AuthLayout } from "@/components/templates/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout
      header={
        <AuthHeader
          title="Create an Account"
          desc="Let’s get you started — it only takes a minute!"
        />
      }
      footer={
        <AuthFooter
          prompt="Already have an account? "
          linkText="Sign In"
          linkHref="/sign-in"
        />
      }
    >
      <SignUpForm />
    </AuthLayout>
  );
}
