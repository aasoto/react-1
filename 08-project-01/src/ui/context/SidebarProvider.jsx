import { useState } from "react"
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({children}) => {

  const [showSidebar, setShowSidebar] = useState(false);

  const [logoPath, setLogoPath] = useState('');

  const switchShowSidebar = () => {
    setShowSidebar(() => !showSidebar);
  }

  const pathUp = () => {
    setLogoPath(() => '../');
  }

  return (
    <SidebarContext.Provider value={{
      showSidebar,
      switchShowSidebar,
      logoPath,
      setLogoPath,
      pathUp
    }}>
      {children}
    </SidebarContext.Provider>
  )
}
