import {
  Calendar,
  Users,
  Home,
  Settings,
  UserCircle,
  ChevronUp,
  PanelLeft,
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
  { title: "Inicio", url: "#", icon: Home },
  { title: "Citas", url: "#", icon: Calendar },
  { title: "Pacientes", url: "#", icon: Users },
  { title: "Configuración", url: "#", icon: Settings },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-card border-r">
      {" "}
      <SidebarHeader className="p-4 border-border border-b h-18 justify-center">
        <div className="flex items-center justify-between gap-2 font-bold">
          <span className="group-data-[collapsible=icon]:hidden bg-linear-to-br from-(--primary) to-(--accent) bg-clip-text text-transparent tracking-tight">
            DentalApp
          </span>
          <SidebarTrigger>
            <PanelLeft />
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Gestión</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <UserCircle /> <span>Dr. Bisonte</span>
                  <ChevronUp className="ml-auto" />
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
