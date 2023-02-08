import { AuthProvider } from "./auth"
import { Navbar, Sidebar, SidebarProvider } from "./ui"

export const App = () => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      {/* <div className="bg-slate-800 w-full h-screen">
        <img src="images/miss-universe-logo.svg" alt="miss-universe-logo" />
        <h1 className="text-3xl text-white font-bold underline">
          Hello world!
        </h1>
      </div> */}
    </AuthProvider>
  )
}
