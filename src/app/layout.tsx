import Image from "next/image";
import "./globals.css";
import { Montserrat } from "next/font/google";
import FooterLogo from "../assets/footerLogo.svg";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Andres Eguino",
  description: "Andres Eguino - UI/UX Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}{" "}
        <section className="bg-[#FBF3FF] px-6 py-16 flex flex-col gap-6 text-center">
          <span className="font-black text-2xl">Get in touch</span>
          <span>Want to discuss a project, collaborate or say hello?</span>
          <span>Contact me, I’d love to hear from you</span>
        </section>
        <section className="px-6 py-8 flex flex-col md:flex-row items-start container mx-auto md:justify-evenly">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm">Contact</span>
            <span className="text-sm font-medium">
              Andres.Eguino.Villarroel@gmail.com
            </span>
          </div>
          <div className="flex  flex-col gap-3 mt-8 md:mt-0">
            <span className="font-bold text-sm">Connect</span>
            <span className="text-sm font-medium">LinkedIn</span>
            <span className="text-sm font-medium">Instagram</span>
            <span className="text-sm font-medium">Dribbble</span>
            <span className="text-sm font-medium">Upwork</span>
          </div>
          <Image src={FooterLogo} alt="" className="mt-10 md:mt-0" />
        </section>
      </body>
    </html>
  );
}
