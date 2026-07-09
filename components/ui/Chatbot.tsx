"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { MessageSquare, X, ArrowRight, Github, Linkedin } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Chatbot() { 
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Reference to scroll to bottom
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const serverMessage = data?.reply || "The chat service is currently unavailable.";
        throw new Error(serverMessage);
      }

      if (!data?.reply) {
        throw new Error("The bot did not return a reply.");
      }

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      const fallback = error instanceof Error ? error.message : "Sorry, I encountered an error.";
      console.error(error);
      setMessages((prev) => [...prev, { role: "bot", text: fallback }]);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key to send
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 text-black">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 transition-colors duration-700">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors duration-700">
            <div className="relative">
              {/* Replace with your actual image path */}
              <img src="/me.jpeg" alt="Graciella" className="w-10 h-10 rounded-full object-cover border border-neutral-100 dark:border-neutral-800 transition-colors duration-700" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-neutral-900 rounded-full transition-colors duration-700"></div>
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-900 dark:text-white transition-colors duration-700">Graciella</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-700">Ask me anything!</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-neutral-50 dark:bg-neutral-950 space-y-4 transition-colors duration-700">
            {messages.length === 0 && (
              <div className="text-center mt-10 opacity-50">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">👋 Hi! I'm Graciella.</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 transition-colors">Ask me about my projects, skills, or studies.</p>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm transition-colors duration-700 ${
                  msg.role === 'user' 
                    ? 'bg-black text-white dark:bg-white dark:text-neutral-900 rounded-tr-sm' 
                    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm transition-colors duration-700">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-700">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="w-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-sm rounded-full pl-4 pr-12 py-3 outline-none focus:ring-1 focus:ring-neutral-200 dark:focus:ring-neutral-700 transition-all duration-300"
                disabled={loading}
              />
              <button 
                onClick={sendMessage} 
                disabled={!input.trim() || loading}
                className="absolute right-2 p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin"/> : <ArrowRight size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Row */}
      {!isOpen && (
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/ciellamher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shrink-0"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ciellamher/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shrink-0"
          >
            <Linkedin size={20} />
          </a>
          
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(true)}
            className="bg-black dark:bg-neutral-800 text-white dark:text-white h-12 sm:h-[52px] px-4 sm:px-6 rounded-full shadow-lg border border-transparent dark:border-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2 sm:gap-3 animate-fade-in shrink-0"
          >
            <MessageSquare size={20} />
            <span className="font-medium hidden sm:inline">Chat with Graciella</span>
            <span className="font-medium sm:hidden">Chat</span>
          </button>
        </div>
      )}
    </div>
  );
}