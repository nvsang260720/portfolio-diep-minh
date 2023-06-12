import { AnimatedText, Transitions, LanguageSwitcher, Layout } from "~/Components";
import { LinkArrow } from "~/Components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profilepic from "public/images/profile/developer-pic-1.png";
import { RiContactsBookFill } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { GoProject } from "react-icons/go";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>YUE | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-2 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={Profilepic}
                alt={"DEVELOPER IMAGE"}
                className="w-full h-auto lg:w-full md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={t('NGUYEN_VAN_SANG')}
                className="!text-5xl !-mb-10 !text-left xl:!text-5xl lg:!text-center lg:!text-5xl lg:!mb-1  md:!text-5xl sm:!text-xl sm:!mb-1"
                fontColour="!text-primary"
              />
              <AnimatedText
                text={t('MERN_DEVELOPER')}
                fontColour="!text-yellow-500"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <ul className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                <li className="m-1">{t('description_1')}</li>
                <li className="m-1">  With prior
                interest in UX and UI, I also have a proficiency in creating
                efficient, effective and engaging web designs.</li>
                <li className="m-1">  Kindly, explore
                my previous works in Projects section that appropriately
                showcases my expertise in the field.</li>
              </ul>
              <div className="flex flex-wrap  items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Soumya_Swaroop Sootar_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  RESUME <LinkArrow />
                </Link>
                <Link
                  href={"/projects"}
                  target="_self"
                  className="ml-4 flex items-center m-1.5 bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  PROJECT <GoProject className="ml-2" />
                </Link>
                <Link
                  href="/about"
                  target={"_self"}
                  className="flex items-center m-1.5  bg-dark text-light p-2 w-[130px] rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  ABOUT <ImUserTie className="ml-4" />
                </Link>
                <Link
                  href={"mailto:nvsang2670@gmail.com"}
                  target="_blank"
                  className="ml-4 flex items-center m-1.5 bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CONTACT
                  <RiContactsBookFill className="ml-2" />
                </Link>
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center"></div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
