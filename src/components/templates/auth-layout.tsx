import { AuthDivider } from "@/components/molecules/auth-divider";
import { SocialLoginButtons } from "@/components/molecules/social-login-buttons";

interface AuthLayoutProps {
  header: React.ReactElement;
  footer?: React.ReactElement;
  children: React.ReactNode;
}

export const AuthLayout = ({ header, footer, children }: AuthLayoutProps) => {
  return (
    <div className="space-y-6">
      {header}
      <SocialLoginButtons />
      <AuthDivider />
      {children}
      {footer && footer}
    </div>
  );
};
