import { useLocation } from "react-router-dom"; // O tu sistema de rutas
import { cn } from "@/lib/utils";
import {
  Calendar,
  Users,
  Home,
  Settings,
  UserCircle,
  ChevronUp,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menú de navegación principal
const items = [
  {
    title: "Dashboard",
    subtitle: "Resumen general",
    url: "/Dashboard",
    icon: Home,
  },
  {
    title: "Agendas",
    subtitle: "Citas y horarios",
    url: "/Agenda",
    icon: Calendar,
  },
  {
    title: "Odontograma",
    subtitle: "Registro dental",
    url: "/Odontograma",
    icon: Users,
  },
  {
    title: "Historial",
    subtitle: "Cronologia de visitas",
    url: "/Historial",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar collapsible="icon" className="bg-card border-r">
      {" "}
      <SidebarHeader className="border-border border-b h-18 group-data-[collapsible=icon]:items-center justify-center">
        <div className="flex items-center justify-between gap-2 font-bold">
          <span className="group-data-[collapsible=icon]:hidden bg-linear-to-br from-(--primary) to-(--accent) bg-clip-text text-transparent tracking-tight">
            DentalApp
          </span>
          <SidebarTrigger className="border border-border bg-background">
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>NAVEGACION</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem className="py-2" key={item.title}>
                    <SidebarMenuButton
                      size="lg"
                      className={cn(
                        "py-8 px-2 transition-all duration-300",
                        "group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center",
                        // CLASES CUANDO ESTÁ ACTIVO:
                        isActive
                          ? "bg-primary text-background hover:bg-primary/90 hover:text-background"
                          : "hover:bg-background text-muted-foreground",
                      )}
                      asChild
                      tooltip={item.title}>
                      <a href={item.url}>
                        <div
                          className={cn(
                            "flex items-center justify-center p-2 rounded-md",
                            isActive ? "bg-white/20" : "bg-background",
                          )}>
                          <item.icon
                            size={25}
                            className={cn(
                              "",
                              isActive ? "text-white/80" : "text-foreground",
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-1 group-data-[collapsible=icon]:hidden">
                          <span className="font-semibold leading-none mb-1">
                            {item.title}
                          </span>
                          <span
                            className={cn(
                              "text-xs font-normal",
                              isActive
                                ? "text-white/80"
                                : "text-muted-foreground",
                            )}>
                            {item.subtitle}
                          </span>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="px-4 py-6 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
                  <UserCircle />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Dr. Bisonte
                  </span>
                  <ChevronUp className="ml-auto group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Mi Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
