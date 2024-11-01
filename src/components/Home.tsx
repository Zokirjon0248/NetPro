import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { Toaster } from "./ui/sonner";

const Home = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        const { name, phone, email } = formData
        setIsFormValid(name.trim() !== '' && phone.trim() !== '' && email.trim() !== '')
    }, [formData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isFormValid) {
            console.log('Forma yuborildi:', formData)
            toast.success('Forma muvaffaqiyatli yuborildi!')
            setFormData({
                name: '',
                phone:  '',
                email: ''
            })
        }
    }
    return (
        <main className="container py-[60px] lg:py-[100px]">
              <Toaster position="top-right" />
            <div className="flex items-center  justify-center lg:justify-between gap-4 lg:gap-2 flex-col lg:flex-row ">
                <div className=" flex flex-col  lg:w-[667px]">
                    <h1 className="font-medium text-center lg:text-start text-[35px] lg:text-[66px] leading-none lg:leading-[74px] mb-4">{t('heroTitle')}</h1>
                    <p className="text-[15px] text-center lg:text-start lg:text-[18px]">{t('heroP')}</p>
                    <div className="mt-[60px] items-center gap-[60px] hidden lg:flex">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-3 bg-custom-gradient px-[35px] py-[20px] rounded-md transition-transform duration-300 active:scale-105">
                                    Kursga yozilish
                                    <img src="/rightBtn.png" width={17.5} height={13.5} alt="" />
                                </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle className="text-center">Ro'yxatdan o'tish</DialogTitle>
                                    <DialogDescription className="text-center">
                                        Tasdiqlash kodi ko'rsatilgan raqamga bepul SMS orqali yuboriladi
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                            <Label className="text-black" htmlFor="name">Isim</Label>
                                            <Input
                                                className="border-[#434343]"
                                                id="name"
                                                name="name"
                                                placeholder="Ismingizni kiriting"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label className="text-black" htmlFor="phone">Telefon raqam</Label>
                                            <Input
                                                className="border-[#434343]"
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+998 __ ___ __ __"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label className="text-black" htmlFor="email">Email</Label>
                                            <Input
                                                className="border-[#434343]"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Email manzilingizni kiriting"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose disabled={!isFormValid}>
                                            <Button type="submit" className="w-full" disabled={!isFormValid}>
                                                Kursga yozilish
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <button className="flex items-center  gap-3 p-4 rounded-md transition-transform duration-300 hover:scale-95 active:scale-105">
                        <img src="/vd.png" width={50} height={50} alt="" />
                        Kurs haqida video
                    </button>
                </div>
            </div>
            <div className="mt-5" >
                <img src="/heroImage.png" width={447} height={438} alt="" />
            </div>
            <div className="mt-[30px] flex items-center justify-center gap-[40px] lg:hidden flex-wrap">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex items-center gap-3 bg-custom-gradient px-[35px] py-[20px] rounded-md transition-transform duration-300 hover:scale-95 active:scale-105">
                            Kursga yozilish
                            <img src="/rightBtn.png" width={17.5} height={13.5} alt="" />
                        </button>

                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="text-center">Ro'yxatdan o'tish</DialogTitle>
                            <DialogDescription className="text-center">
                                Tasdiqlash kodi ko'rsatilgan raqamga bepul SMS orqali yuboriladi
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label className="text-black" htmlFor="name">Isim</Label>
                                    <Input
                                        className="border-[#434343]"
                                        id="name"
                                        name="name"
                                        placeholder="Ismingizni kiriting"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-black" htmlFor="phone">Telefon raqam</Label>
                                    <Input
                                        className="border-[#434343]"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+998 __ ___ __ __"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-black" htmlFor="email">Email</Label>
                                    <Input
                                        className="border-[#434343]"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email manzilingizni kiriting"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose disabled={!isFormValid}>
                                    <Button type="submit" className="w-full" disabled={!isFormValid}>
                                        Kursga yozilish
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <button className="flex items-center gap-3 p-2 rounded-md transition-transform duration-300 hover:scale-95 active:scale-105">
                    <img src="/vd.png" width={50} height={50} alt="" />
                    Kurs haqida video
                </button>
            </div>
        </div>
        </main >
    )
}

export default Home