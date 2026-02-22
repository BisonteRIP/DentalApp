import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center bg-card border-border shadow-shadow shadow-md w-full h-18 ">
      <Button className="bg-background text-foreground border border-border">
        Button
      </Button>
    </header>
  );
}
