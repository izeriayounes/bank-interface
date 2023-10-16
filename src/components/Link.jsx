import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

function Link({ to, children, className }) {
  const { navigate } = useContext(NavigationContext);

  function handleClick(event) {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
