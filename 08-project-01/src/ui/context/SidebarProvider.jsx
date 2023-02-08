import { useState } from "react"
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({children}) => {

  const [showSidebar, setShowSidebar] = useState(false);

  const switchShowSidebar = () => {
    setShowSidebar(() => !showSidebar);
  }

  return (
    <SidebarContext.Provider value={{
      showSidebar,
      switchShowSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}
