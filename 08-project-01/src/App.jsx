import { AuthProvider } from "./auth"
import { AppRouter } from "./router"

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
