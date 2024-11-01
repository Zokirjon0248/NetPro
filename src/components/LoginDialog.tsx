'use client'

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
import { IoLogoYoutube } from "react-icons/io";
export default function LoginDialog() {

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
        phone: '',
        email: ''
      })
    }
  }
  return (
    <>
      <Toaster position="top-right" />
      <div className="mt-[30px] flex items-center justify-center lg:justify-start gap-[40px] flex-wrap">

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
                    className="border-[#434343]  text-black"
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
                    className="border-[#434343]  text-black"
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
                    className="border-[#434343]  text-black"
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
          <a href="http://www.youtube.com/@netproitschool9325" className="px-[40px] py-[20px]  flex items-center gap-3 bg-custom-gradient cursor-pointer rounded-md transition-transform duration-300 hover:scale-95 active:scale-105" target='_blank'>
            Youtube
            <IoLogoYoutube className="text-2xl" />
          </a>
      </div>
    </>

  )
}