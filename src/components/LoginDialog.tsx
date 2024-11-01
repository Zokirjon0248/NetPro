'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
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
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Ro'yxatdan o'tish</Button>
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
              <Label htmlFor="name">Isim</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ismingizni kiriting"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefon raqam</Label>
              <Input
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
              <Label htmlFor="email">Email</Label>
              <Input
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
            <Button type="submit" className="w-full" disabled={!isFormValid}>
              Kursga yozilish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}