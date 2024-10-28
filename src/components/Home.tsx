import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <main className="container py-[60px] lg:py-[100px]">
            <div className="flex items-center justify-center lg:justify-between gap-4 lg:gap-2 flex-col lg:flex-row ">
                <div className=" flex flex-col  lg:w-[667px]">
                    <h1 className="font-medium text-[35px] lg:text-[66px] leading-none lg:leading-[74px] mb-4">{t('heroTitle')}</h1>
                    <p className="text-[15px] lg:text-[18px]">{t('heroP')}</p>
                    <div className="mt-[60px] flex items-center gap-[60px]">
                        <button className="flex items-center gap-3 bg-custom-gradient p-2 md:p-4 rounded-md transition-transform duration-300 hover:scale-95 active:scale-105">
                            Kursga yozilish
                            <img src="/rightBtn.png" width={17.5} height={13.5} alt="" />
                        </button>
                        <button className="flex items-center gap-3 p-4 rounded-md transition-transform duration-300 hover:scale-95 active:scale-105">
                            <img src="/vd.png" width={50} height={50} alt="" />
                            Kurs haqida video
                        </button>
                    </div>

                </div>
                <div >
                    <img src="/heroImage.png" width={447} height={438} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home