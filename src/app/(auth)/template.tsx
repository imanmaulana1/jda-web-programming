export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-left-8 duration-500 ease-out">
      {children}
    </div>
  );
}
