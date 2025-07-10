interface AuthHeaderProps {
  title: string;
  desc: string;
}

export const AuthHeader = ({ title, desc }: AuthHeaderProps) => {
  return (
    <header className="space-y-1">
      <h1 className="text-xl leading-tight font-bold sm:text-2xl">{title}</h1>
      <p className="text-muted-foreground text-sm sm:text-base">{desc}</p>
    </header> 
  );
};
