import { useTranslation } from 'react-i18next';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (e: string) => {
        i18n.changeLanguage(e);
    };

    return (
         <Select onValueChange={changeLanguage} value={i18n.language}> 
         <SelectTrigger className="w-[80px] ml-4">
           <SelectValue placeholder="Til" />
         </SelectTrigger>
         <SelectContent >
           <SelectItem value="uz">UZB</SelectItem>
           <SelectItem value="ru">RUS</SelectItem>
           <SelectItem value="en">ENG</SelectItem>
         </SelectContent>
       </Select>
    );
};

export default LanguageSelector;
