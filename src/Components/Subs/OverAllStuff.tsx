import { motion, useReducedMotion } from "framer-motion";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import { techIcons } from "../../utils/techIcons";

export const OverAllStuff = () => {
  const [copy, setCopy] = useState<boolean>(false);
  const email = "pranaysaikolloju@gmail.com";
  const [info, setinfo] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 100);
  };
  const techStack = [
    { id: 0, name: "Java", icon: techIcons.java },
    { id: 1, name: "Python", icon: techIcons.python },
    { id: 2, name: "C", icon: techIcons.c },
    { id: 3, name: "TypeScript", icon: techIcons.typescript },
    { id: 4, name: "SQL", icon: techIcons.mysql },
    { id: 5, name: "HTML5", icon: techIcons.html5 },
    { id: 6, name: "CSS3", icon: techIcons.css3 },
    { id: 7, name: "JavaScript", icon: techIcons.javascript },
    { id: 8, name: "React", icon: techIcons.react },
    { id: 9, name: "React Query", icon: techIcons.react },
    { id: 10, name: "Tailwindcss", icon: techIcons.tailwind },
    { id: 11, name: "shadcn/ui", icon: techIcons.logo },
    { id: 12, name: "MUI", icon: techIcons.mui },
    { id: 13, name: "Figma", icon: techIcons.figma },
    { id: 14, name: "AWS", icon: techIcons.aws },
    { id: 15, name: "GitHub", icon: techIcons.github },
    { id: 16, name: "Git", icon: techIcons.git },
  ];
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      {/* main grid */}

      <div
        className=" p-5 sm:p-10 lg:mx-10 rounded-xl grid  grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
          auto-rows-[minmax(min-content,auto)] gap-2 min-h-screen bg-black 
          lg:grid-cols-4"
      >
        <motion.div
          className="lg:col-span-3 group  p-10 w-full rounded-2xl bg-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]
      hover:shadow-[inset_0_0_10px_rgba(255,255,0.5)]
"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <h1 className="text-white text-primary-font text-sm sm:text-xl lg:text-3xl mb-5 group-hover:text-yellow-300">
            Collaboration
          </h1>
          <p className=" text-white text-justify hyphens-auto text-sm leading-relaxed">
            I value collaboration as a key part of building meaningful and
            effective solutions. Working with others allows me to exchange
            ideas, learn from different perspectives, and turn concepts into
            well-crafted results. I enjoy contributing to team discussions,
            giving and receiving feedback, and growing alongside others to
            achieve shared goals.
          </p>
        </motion.div>
        <motion.div
          className=" lg:row-span-2 group relative flex flex-col justify-between  p-10 w-full rounded-2xl bg-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] *: hover:shadow-[inset_0_0_10px_rgba(255,255,0.5)]
"
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {" "}
          <div>
            <h1
              className="text-white text-primary-font text-sm  lg:text-3xl sm:text-xl mb-5 sm:whitespace-nowrap lg:whitespace-break-spaces
   group-hover:text-yellow-300 "
            >
              Passionate About Technology
            </h1>
            <p className=" text-white text-justify hyphens-auto text-sm leading-relaxed ">
              I’m deeply enthusiastic about working with modern technologies and
              continuously expanding my skill set. I enjoy exploring new tools,
              improving my craft, and applying the right technology to build
              efficient, scalable, and impactful solutions.
            </p>
          </div>
          <motion.div className=" hidden  lg:block absolute overflow-hidden h-1/2 top-[40%]  z-10 left-0 right-0   ">
            {/* Diagonal wrapper */}
            <div className="absolute top-1/2 left-[-20%] w-[140%] -translate-y-1/2 -rotate-12">
              <motion.div
                className="flex w-max gap-6 whitespace-nowrap bg-white"
                animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {[...techStack, ...techStack].map((tech,index) => (
                  <span
                    key={`${tech.id}-${index}`}
                    className="px-4 py-2 text-sm tracking-wide bg-white text-black hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] 
              
              transition-all 0.15 ease-in-out rounded flex gap-2"
                  >
                    <img src={tech.icon} loading="lazy" className="w-4 h-4" />
                    {tech.name}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <div className="hidden lg:block absolute overflow-hidden h-1/2 top-[40%] left-0 right-0  pointer-events-none">
            <div className="absolute top-1/2 left-[-20%] w-[140%] h-12 -translate-y-1/2 rotate-12 bg-white/80" />
          </div>
        </motion.div>
        <motion.div
          className=" p-10 w-full rounded-2xl bg-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]
       hover:shadow-[inset_0_0_10px_rgba(255,255,0.5)]
       group
"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-white text-primary-font text-sm  lg:text-3xl sm:text-xl  mb-5 group-hover:text-yellow-300">
            Adaptable Work Schedule
          </h1>
          <p className=" text-white text-justify hyphens-auto text-sm leading-relaxed">
            I offer an adaptable work schedule that allows flexibility without
            compromising communication, deadlines, or quality. This ensures
            smooth collaboration and timely project delivery for clients across
            different time zones
          </p>
        </motion.div>
        <motion.div
          className="lg:col-span-2 p-10 group w-full rounded-2xl bg-white/5 flex flex-col gap-6 justify-center items-center shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]
       hover:shadow-[inset_0_0_10px_rgba(255,255,0.5)]
"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-white text-sm sm:text-xl lg:text-3xl group-hover:text-yellow-300 ">
            Lets Connect Together
          </h1>
          <div className="  bg-black/3 w-full max-w-max 0  flex px-4 py-3 space-x-5 rounded-full border border-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]">
            <h1 className="text-white text-sm">{email}</h1>
            <div
              onMouseEnter={() => setinfo(true)}
              onMouseLeave={() => setinfo(false)}
            >
              <CopyIcon
                onClick={handleCopy}
                className={`${copy ? "text-white" : "text-blue-500"} relative cursor-pointer transition-all 0.15 ease-in-out `}
              ></CopyIcon>
              {info && (
                <span className="absolute  text-white -translate-y-1/20  rounded bg-black px-2 py-1 text-xs">
                  {copy ? "Copied !" : "Copy"}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
