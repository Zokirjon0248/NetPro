import { useTranslation } from "react-i18next";
import LoginDialog from "./LoginDialog";

const Home = () => {
    const { t } = useTranslation();
    return (
        <main className="container py-[60px] lg:py-[80px]">
            <div className="flex justify-between items-center flex-col lg:flex-row">
                <div className="flex items-center  justify-center lg:justify-between gap-4 lg:gap-2 flex-col lg:flex-row ">
                    <div className=" flex flex-col  lg:w-[550px] xl:w-[667px]">
                        <h1 className="font-medium text-center lg:text-start text-[35px] lg:text-[50px] xl:text-[66px] leading-none lg:leading-[56px] xl:leading-[60px] mb-4">{t('heroTitle')}</h1>
                        <p className="text-[15px] text-center lg:text-start xl:text-[18px]">{t('heroP')}</p>
                        <div className="hidden md:inline-block">
                            <LoginDialog />
                        </div>
                    </div>
                </div>
                <div className="mt-5" >
                    <img className="w-[447px] h-auto" src="/heroImage.png" width={447} height={438} alt="" />
                    <div className="inline-block md:hidden">
                        <LoginDialog />
                    </div>
                </div>


            </div>
        </main >
    )
}

export default Home