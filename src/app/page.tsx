import Image from "next/image";
import Logo from "../assets/logo.svg";
import BurgerSvg from "../assets/burger.svg";
import ScrollButton from "@/ScrollButton";
import FirstProject from "../assets/first.png";
import SecondProject from "../assets/second.png";
import ThirdProject from "../assets/third.png";
import FourthProject from "../assets/Fourth.png";
import HomeProject from "@/components/HomeProject";
import FooterLogo from "../assets/footerLogo.svg";
export default function Home() {
  return (
    <div>
      <div className="bg-[linear-gradient(142.28deg,#8B00CD_13.76%,#00AEAE_78.19%)] flex flex-col h-screen w-full relative">
        <header className="flex items-center justify-between px-5 py-3">
          <Image className="  md:w-16 w-8  " src={Logo} alt={""} />
          <Image className="md:w-16 " src={BurgerSvg} alt={""} />
        </header>
        <div className="flex-1 justify-center flex items-center text-white px-6">
          <h2 className="">
            <span className="text-2xl">
              {" "}
              Hey! Nice to meet you, feel free to take a look at my work.
            </span>
            <br />
            <br />I am committed to creating visually stunning and user-centered
            designs that prioritize the needs and experiences of the user.
            <br />
            <br />
            <span className="text-xs">
              <span className="underline">Learn more</span> about me or view
              work below.
            </span>
          </h2>
        </div>
        <ScrollButton />
      </div>
      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 md:px-0 md:pt-0 md:gap-0 pt-8 px-6 gap-8 pb-16">
        <HomeProject
          image={FirstProject}
          title="Masterweb’s Website Re-Design"
          decription="UX/UI | Web"
        />

        <HomeProject
          color="#1387F2"
          image={SecondProject}
          title="Prodigy Tech Website"
          decription="UX/UI | Web | Responsive"
        />
        <HomeProject
          color="#DC5C00"
          image={FourthProject}
          title="At Night App"
          decription="UX/UI | App"
        />
        <HomeProject
          color="#7400AA"
          image={ThirdProject}
          title="NLC Designer"
          decription="UX/UI | Graphic Design"
        />
      </main>
      <section className="bg-[#FBF3FF] px-6 py-16 flex flex-col gap-6 text-center">
        <span className="font-black text-2xl">Get in touch</span>
        <span>Want to discuss a project, collaborate or say hello?</span>
        <span>Contact me, I’d love to hear from you</span>
      </section>
      <section className="px-6 py-8">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-sm">Contact</span>
          <span className="text-sm font-medium">
            Andres.Eguino.Villarroel@gmail.com
          </span>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <span className="font-bold text-sm">Connect</span>
          <span className="text-sm font-medium">LinkedIn</span>
          <span className="text-sm font-medium">Instagram</span>
          <span className="text-sm font-medium">Dribbble</span>
          <span className="text-sm font-medium">Upwork</span>
        </div>
        <Image src={FooterLogo} alt="" className="mt-16" />
      </section>
    </div>
  );
}
