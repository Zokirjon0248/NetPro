import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {  Users, Phone , Book   } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSelector from "./LanguageSelector"

export default function MenuSheet() {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <img src="/navButton.png" alt="" />
          <span className="sr-only">Menyuni ochish</span>
        </button>
      </SheetTrigger>
      <SheetContent aria-label="Main Menu"> {/* Tavsifni olib tashlash */}
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between space-x-4">
            <div className="flex items-center">
             <Link to={'/'}>
             <img src="/logo.svg" width={80} height={80} alt="" />
             </Link>
            </div>
            <LanguageSelector />
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="hidden">
        </SheetDescription>
        <div className="grid gap-4 py-4 space-y-2">
          <Link to="/aboutcourse" className="flex items-center p-2 text-sm rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground transition-colors">
            <Book className="mr-2 h-4 w-4" />
            {t('navText.text1')}
          </Link>
          <Link to="/aboutus" className="flex items-center p-2 text-sm rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground transition-colors">
            <Users className="mr-2 h-4 w-4" />
            {t('navText.text2')}
          </Link>
          <Link to="/contact" className="flex items-center p-2 text-sm rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground transition-colors">
          <Phone className="mr-2 h-4 w-4" />
            {t('navText.text4')}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
