import { useLanguageStore } from "@/store/useLanguageStore"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguageStore()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-bold hover:text-primary transition-colors"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </Button>
  )
}