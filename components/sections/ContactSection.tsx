import { Mail, ChevronRight, Github, Linkedin, MessageSquare, Instagram, Globe, Users, Mic, ArrowUpRight, Calendar, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
      <div className="h-full bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 flex flex-col transition-colors duration-700">
        <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-neutral-900 dark:text-white transition-colors duration-700">
          <Users size={18} className="text-neutral-400 dark:text-neutral-500 transition-colors duration-700" /> A volunteer of
        </h3>
        <div className="space-y-3">
          {[
            { name: "Notion at HAU", link: "https://instagram.com/notion.hau" },
            { name: "DEVCON.PH", link: "https://devcon.ph/pampanga/" },
            { name: "Each One Teach One Philippines", link: "https://www.instagram.com/eachteach.ph/" }
          ].map((org, i) => (
            <a
              key={i}
              href={org.link}
              target={org.link === "#" ? "_self" : "_blank"}
              rel={org.link === "#" ? undefined : "noopener noreferrer"}
              className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-100 dark:border-neutral-800 flex justify-between items-center group cursor-pointer hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 no-underline"
            >
              <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {org.name}
              </span>
              <ArrowUpRight size={14} className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>

      <div className="h-full bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 flex flex-col transition-colors duration-700">
        <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-neutral-900 dark:text-white transition-colors duration-700">
          <Globe size={18} className="text-neutral-400 dark:text-neutral-500 transition-colors duration-700" /> Social Links
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "LinkedIn", icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/ciellamher/" },
            { name: "GitHub", icon: <Github size={18} />, link: "https://github.com/ciellamher" },
            { name: "Instagram", icon: <Instagram size={18} />, link: "https://www.instagram.com/ciellamher/" },
            { name: "Facebook", icon: <MessageSquare size={18} />, link: "https://www.facebook.com/gramenez/" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-100 dark:border-neutral-800 group hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 no-underline"
            >
              <div className="text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors mb-2">
                {social.icon}
              </div>
              <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors uppercase tracking-wider">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="h-full bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between transition-colors duration-700">
        <div>
          <h3 className="text-sm font-bold flex items-center gap-2 mb-4 text-neutral-900 dark:text-white transition-colors duration-700">
            <Mic size={18} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Speaking
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed transition-colors duration-700">
            Available for speaking at events about software development, leadership, and Notion productivity.
          </p>
        </div>
        <a href="mailto:work.gmdjimenez@gmail.com" className="mt-6 flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white hover:underline no-underline w-fit transition-colors duration-700">
          Get in touch <ChevronRight size={14} />
        </a>
      </div>

      <div className="h-full space-y-3 flex flex-col">
        <div className="flex-1 bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-2 transition-colors duration-700">
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider transition-colors duration-700">
            <Mail size={14} /> <span>EMAIL</span>
          </div>
          <div className="flex flex-col gap-0">
            <a href="mailto:work.gmdjimenez@gmail.com" className="text-base font-semibold text-neutral-900 dark:text-white transition-colors duration-700">work.gmdjimenez@gmail.com</a>
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-2 transition-colors duration-700">
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider transition-colors duration-700">
            <Mail size={14} /> <span>NOTION</span>
          </div>
          <div className="flex flex-col gap-0">
            <a href="mailto:notion.hau@gmail.com" className="text-base font-semibold text-neutral-900 dark:text-white transition-colors duration-700">notion.hau@gmail.com</a>
          </div>
        </div>

        <a href="https://calendar.app.google/EVMe3RzST39L25MH9" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex justify-between items-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] no-underline">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-neutral-900 dark:text-white transition-colors duration-700" />
            <span className="text-sm font-bold text-neutral-900 dark:text-white transition-colors duration-700">Let's Talk</span>
          </div>
          <ChevronRight size={16} className="text-neutral-400 dark:text-neutral-500 transition-colors duration-700" />
        </a>

        <a href="/Graciella_Jimenez_Computer_Science_CV.pdf" download className="flex-1 bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex justify-between items-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] no-underline">
          <div className="flex items-center gap-2">
            <Download size={18} className="text-neutral-900 dark:text-white transition-colors duration-700" />
            <span className="text-sm font-bold text-neutral-900 dark:text-white transition-colors duration-700">Download CV</span>
          </div>
          <ChevronRight size={16} className="text-neutral-400 dark:text-neutral-500 transition-colors duration-700" />
        </a>
      </div>
    </div>
  );
}
