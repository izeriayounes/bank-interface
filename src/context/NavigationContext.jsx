import { useState, useEffect, createContext, useContext } from "react";

const NavigationContext = createContext();

export default function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handle = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handle);

    return () => {
      window.removeEventListener("popstate", handle);
    };
  }, []);

  function navigate(to) {
    window.history.pushState({}, "", to);
    setCurrentPath(window.location.pathname);
  }

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigationContext() {
  return useContext(NavigationContext);
}
export { useNavigationContext, NavigationContext };
