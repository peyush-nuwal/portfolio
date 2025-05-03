interface NavOption {
  name: string;
  path: string;
  type: "route" | "url";
}

export const navOptions: NavOption[] = [
  { name: "Home", path: "#hero", type: "route" },
  { name: "About", path: "#about", type: "route" },
  { name: "Projects", path: "#projects", type: "route" },
  { name: "Contact", path: "#contact", type: "route" },
];