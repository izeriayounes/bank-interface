import { NavigationContext } from "../context/NavigationContext";
import { useContext } from "react";

export default function Route({ children, path }) {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) return children;

  return null;
}
