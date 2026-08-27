import { FaSun, FaMoon } from "react-icons/fa"
import { useThemeStore } from "@/store/useThemeStore"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  // Nos traemos el estado y la función para cambiarlo
  const { theme, toggleTheme } = useThemeStore()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-transform hover:scale-110"
    >
      {theme === "light" ? (
        <FaMoon className="h-5 w-5 text-slate-800" />
      ) : (
        <FaSun className="h-5 w-5 text-yellow-400" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}