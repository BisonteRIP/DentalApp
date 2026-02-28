import { Button } from "./ui/button";
import { Bell, Moon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  return (
    <header className="flex items-center justify-between pr-15 xl:px-15 bg-card border-border border-b w-full h-18 ">
      <div className="flex gap-5 items-center">
        <span className="text-2xl font-bold bg-linear-to-br from-(--primary) to-(--accent) bg-clip-text text-transparent tracking-tight">
          DentalCloud
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <Select>
          <SelectTrigger className="w-55 bg-card border-border focus-visible:ring-border">
            <SelectValue placeholder="Lista de clientes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="vicente">Vicente Quiroz</SelectItem>
              <SelectItem value="elibeth">Elibeth Villalobos</SelectItem>
              <SelectItem value="gianfranco">Gianfranco Peñaz</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button className="bg-background text-foreground border border-border h-10 w-10">
            <Bell size={24} color="#333" strokeWidth={2} />
          </Button>
          <Button className="bg-background text-foreground border border-border h-10 w-10">
            <Moon size={24} color="#333" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </header>
  );
}
