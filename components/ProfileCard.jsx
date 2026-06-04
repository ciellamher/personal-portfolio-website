import { Calendar, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-3 mt-8 relative z-20"> {/* z-index added here */}
      
      {/* 1. Schedule a Call Link */}
      <a 
        href="https://calendar.app.google/EVMe3RzST39L25MH9" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-[#111] text-white rounded-2xl hover:bg-black transition-all font-medium no-underline cursor-pointer"
      >
        <Calendar size={18} />
        Schedule a Call
      </a>

      {/* 2. CV Download - Place your PDF in the 'public' folder */}
      <a 
        href="/Graciella_Jimenez_Computer_Science_CV.pdf" 
        download
        className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-medium text-black no-underline cursor-pointer"
      >
        <Download size={18} />
        CV
      </a>

      {/* 3. GitHub Link */}
      <a 
        href="https://github.com/ciellamher" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all text-black cursor-pointer"
      >
        <Github size={20} />
      </a>

      {/* 4. LinkedIn Link */}
      <a 
        href="https://www.linkedin.com/in/ciellamher/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all text-black cursor-pointer"
      >
        <Linkedin size={20} />
      </a>

      {/* 5. Direct Email Link */}
      <a 
        href="mailto:work.gmdjimenez@gmail.com" 
        className="p-4 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all text-black cursor-pointer"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}