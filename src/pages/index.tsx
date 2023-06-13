import { AnimatedText, Transitions, Layout } from "~/Components";
import { LinkArrow } from "~/Components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profilepic from "public/images/profile/developer-pic-1.png";
import { GoProject } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { LANGUAGE_DESCRIPTION } from "~/constants";

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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={t(LANGUAGE_DESCRIPTION.full_name)}
                className="!text-5xl !-mb-10 !text-left xl:!text-5xl lg:!text-center lg:!text-5xl lg:!mb-1  md:!text-5xl sm:!text-xl sm:!mb-1"
                fontColour="!text-primary"
              />
              <AnimatedText
                text={t(LANGUAGE_DESCRIPTION.mern_developer)}
                fontColour="!text-yellow-500"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <ul className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                <li className="m-1">{t(LANGUAGE_DESCRIPTION.home_description_1)}</li>
                <li className="m-1">{t(LANGUAGE_DESCRIPTION.home_description_2)}</li>
                <li className="m-1">{t(LANGUAGE_DESCRIPTION.home_description_3)}</li>
              </ul>
              <div className="flex flex-wrap  items-center self-start mt-2 lg:self-center">
                <Link
                  href="/cv_yue.pdf"
                  target={"_blank"}
                  className="uppercase flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  {t(LANGUAGE_DESCRIPTION.resume)} <LinkArrow />
                </Link>
                <Link
                  href={"/projects"}
                  target="_self"
                  className="uppercase ml-4 flex items-center m-1.5 bg-dark text-light p-2 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  {t(LANGUAGE_DESCRIPTION.projects)} <GoProject className="ml-2" />
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
