import { useState } from "react";

export default function Sidebarclose() {
  const [menuActive, setMenuActive] = useState(false);
  return () => setMenuActive(!menuActive);
}
