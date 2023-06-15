import Image from "next/image";
import React, { ReactNode } from "react";
import coverM from "@/assets/masterweb/mobile-cover.png";
import Header from "@/components/Header";
import { projects } from "@/app/projects";
import Link from "next/link";
import mark from "@/assets/mark.png";

function Title({ children }: { children: ReactNode }) {
  return <h2 className="font-bold text-2xl">{children}</h2>;
}
function Body({ children }: { children: ReactNode }) {
  return <p className="whitespace-pre-line">{children}</p>;
}
function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  return (
    <div className="min-h-screen">
      <Image
        src={project?.cover!}
        alt=""
        className="w-full hidden md:block object-cover h-full object-top"
      />
      <Image
        src={project?.cover!}
        alt=""
        className="w-full md:hidden object-cover object-top"
      />
      <Header color="purple" />
      <div className="px-6 pt-16 container mx-auto">
        <Title>{project?.name}</Title>
        <Body>{project?.description}</Body>
      </div>{" "}
      <div className="mx-auto container md:flex justify-between">
        <div className="mt-16 px-6">
          <Title>My Role</Title>
          <Body>
            {project?.roles.map((r) => (
              <span className="mt-3 block">{`${r}\n`}</span>
            ))}
          </Body>
        </div>{" "}
        <div className="mt-16 px-6">
          <Title>Team</Title>
          <Body>
            {project?.team.map((r) => (
              <span className="mt-3 block">{`${r}\n`}</span>
            ))}
          </Body>
        </div>
        <div className="mt-16 px-6">
          <Title>Completed</Title>
          <Body>
            <span className="mt-3 block">{project?.completed}</span>
          </Body>
        </div>
      </div>
      <div>
        {project?.sections.map((s: any) => {
          if (s.type === "context") {
            return (
              <>
                <Image className="mt-16 w-full" src={s.image!} alt="" />
                <div className="px-6 container mx-auto">
                  <div className="mt-16 pb-16 border-b-[0.5px] border-[#343434]">
                    <div>
                      <Title>The Context</Title>
                      <Body>
                        <span className="mt-3 block whitespace-pre-line">
                          {s.context}
                        </span>
                      </Body>
                    </div>
                  </div>
                </div>
              </>
            );
          }
          if (s.type === "problem") {
            return (
              <div className="my-16 px-6 md:flex gap-16 container mx-auto">
                <Image className="mb-16 md:w-80" src={mark} alt="" />
                <div>
                  <Title>{s.title}</Title>
                  <Body>
                    <span className="mt-3 block whitespace-pre-line">
                      {s.description}
                    </span>
                  </Body>
                </div>
              </div>
            );
          }
          if (s.type === "definition") {
            return (
              <div
                className={`py-16   px-6 text-white `}
                style={{ backgroundColor: project.color }}
              >
                <div className="container mx-auto">
                  <Title>{s.title}</Title>
                  <Body>
                    <span className="mt-3 block whitespace-pre-line">
                      {s.description}
                    </span>
                  </Body>
                </div>
                <div className="mt-16 border border-white container mx-auto">
                  <ul className="p-7 pb-0  md:flex">
                    {s.steps?.map((step: any) => (
                      <li className="mb-6">
                        <div className="flex items-center gap-2 text-xl font-semibold">
                          <div className="w-5 aspect-square rounded-full bg-white"></div>
                          <span>{step.title}</span>
                        </div>
                        {step.substeps.map((sub: any) => (
                          <div className="flex items-center gap-2 font-normal text-lg">
                            <div className="w-5 aspect-square rounded-full bg-transaparent"></div>
                            <span className="mt-3 block">{`${sub}\n`}</span>
                          </div>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }
          if (s.type === "success") {
            return (
              <div
                className={`py-16 mt-16  px-6 text-white`}
                style={{ backgroundColor: project.color }}
              >
                <div>
                  <Title>{s.title}</Title>
                  <Body>
                    <span className="mt-3 block whitespace-pre-line">
                      {s.content}
                    </span>
                  </Body>
                </div>
              </div>
            );
          }
          if (s.type === "image") {
            const addedS =
              s.position !== "top" ? "flex flex-col" : "flex flex-col-reverse";
            return (
              <>
                <div
                  className={
                    s.inline
                      ? " md:pb-16  md:mt-16 md:container mx-auto md:grid md:grid-cols-2 items-center" +
                        addedS
                      : "md:pb-16 md:flex md:flex-col md:mt-16 " + addedS
                  }
                >
                  <div className="px-6 md:h-full md:flex md:flex-col md:justify-between flex flex-col items-center">
                    <div className="mt-16 md:h-full md:flex md:flex-col md:justify-between md:mt-0 md:pb-0  pb-16 mx-auto container ">
                      <div>
                        <Title>{s.title}</Title>
                        <Body>
                          <span className="mt-3 block whitespace-pre-line">
                            {s.content}
                          </span>
                        </Body>
                      </div>

                      {!!s.secondTitle && !!s.secondContent && (
                        <div className=" md:block hidden">
                          <Title>{s.secondTitle}</Title>
                          <Body>
                            <span className="mt-3 block whitespace-pre-line">
                              {s.secondContent}
                            </span>
                          </Body>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      s.inline
                        ? "px-6"
                        : s.position !== "top"
                        ? "mt-16 mb-0"
                        : "mb-16 mt-16 md:mt-0"
                    }
                  >
                    <Image
                      src={s.image!}
                      alt=""
                      className={
                        s.inline ? " mx-auto w-full" : "mx-auto w-full"
                      }
                    />
                  </div>
                </div>
                {!!s.secondTitle && !!s.secondContent && (
                  <div className="px-6 mt-10 mb-16 md:hidden block">
                    <Title>{s.secondTitle}</Title>
                    <Body>
                      <span className="mt-3 block whitespace-pre-line">
                        {s.secondContent}
                      </span>
                    </Body>
                  </div>
                )}
                {s.withDivision ? (
                  <div className="px-6">
                    <div className="w-full border-b border-black"></div>
                  </div>
                ) : null}
              </>
            );
          }
        })}
      </div>
      <div className="flex items-center px-6 pt-8 pb-16 justify-between">
        {projects[projects.indexOf(project!) - 1] ? (
          <Link
            href={`/projects/${projects[projects.indexOf(project!) - 1]?.slug}`}
            className="flex flex-col cursor-pointer "
          >
            <span className="text-[#343434]">Previous</span>
            <span className="text-2xl font-medium">
              {projects[projects.indexOf(project!) - 1]?.name}
            </span>
          </Link>
        ) : (
          <Link href="/" className="flex flex-col cursor-pointer ">
            <span className="text-[#343434]">Previous</span>
            <span className="text-2xl font-medium">More Work</span>
          </Link>
        )}
        {projects[(projects.indexOf(project!) + 1) % projects.length] ? (
          <Link
            href={`/projects/${
              projects[(projects.indexOf(project!) + 1) % projects.length]?.slug
            }`}
            className="flex flex-col cursor-pointer "
          >
            <span className="text-[#343434]">Next</span>
            <span className="text-2xl font-medium">
              {
                projects[(projects.indexOf(project!) + 1) % projects.length]
                  ?.name
              }
            </span>
          </Link>
        ) : (
          <Link href="/" className="flex flex-col cursor-pointer ">
            <span className="text-[#343434]">Next</span>
            <span className="text-2xl font-medium">More Work</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Project;
