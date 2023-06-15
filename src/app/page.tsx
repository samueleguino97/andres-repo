import Image from "next/image";
import Logo from "../assets/logo.svg";
import BurgerSvg from "../assets/burger.svg";
import ScrollButton, { ScrollTopButton } from "@/ScrollButton";
import FirstProject from "../assets/first.png";
import SecondProject from "../assets/second.png";
import ThirdProject from "../assets/third.png";
import FourthProject from "../assets/fourth.png";
import HomeProject from "@/components/HomeProject";

export default function Home() {
  return (
    <div>
      <div className="bg-[linear-gradient(142.28deg,#8B00CD_13.76%,#00AEAE_78.19%)] flex flex-col h-screen w-full relative">
        <header className="flex items-center justify-between px-5 py-3">
          <Image className="  md:w-16 w-8  " src={Logo} alt={""} />
          <Image className="md:w-16 " src={BurgerSvg} alt={""} />
        </header>
        <div className="flex-1 justify-center flex items-center text-white px-6">
          <h2 className="container mx-auto max-w-3xl">
            <span className="text-2xl">
              {" "}
              Hey! Nice to meet you, feel free to take a look at my work.
            </span>
            <br className="md:hidden " />
            <br />
            <span className="max-w-2xl md:block">
              I am committed to creating visually stunning and user-centered
              designs that prioritize the needs and experiences of the user.
            </span>
            <br className="md:hidden" />
            <br className="md:hidden" />
            <span className="text-xs">
              <span className="underline">Learn more</span> about me or view
              work below.
            </span>
          </h2>
        </div>
        <ScrollButton />
      </div>
      <main
        id="projects"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 md:px-0 md:pt-0 md:gap-0 pt-8 px-6 gap-8 pb-16"
      >
        <HomeProject
          slug="masterweb"
          image={FirstProject}
          title="Masterweb’s Website Re-Design"
          decription="UX/UI | Web"
        />

        <HomeProject
          slug="prodigytech"
          color="#1387F2"
          image={SecondProject}
          title="Prodigy Tech Website"
          decription="UX/UI | Web | Responsive"
        />
        <HomeProject
          slug="atnight"
          color="#DC5C00"
          image={FourthProject}
          title="At Night App"
          decription="UX/UI | App"
        />
        <HomeProject
          slug="nlc"
          color="#7400AA"
          image={ThirdProject}
          title="NLC Designer"
          decription="UX/UI | Graphic Design"
        />
      </main>
    </div>
  );
}
