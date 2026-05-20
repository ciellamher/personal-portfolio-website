"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { MessageSquare, X, ArrowRight } from "lucide-react";

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
    <div className="fixed bottom-4 right-4 z-50 text-black">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-neutral-800 transition-all flex items-center gap-3 animate-fade-in"
        >
          <MessageSquare size={20} />
          <span className="font-medium">Chat with Graciella</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-white border border-neutral-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-neutral-100 bg-white">
            <div className="relative">
              {/* Replace with your actual image path */}
              <img src="/me.jpeg" alt="Graciella" className="w-10 h-10 rounded-full object-cover border border-neutral-100" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-neutral-900">Graciella</div>
              <div className="text-xs text-neutral-500">Ask me anything!</div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-neutral-50 space-y-4">
            {messages.length === 0 && (
              <div className="text-center mt-10 opacity-50">
                <p className="text-sm text-neutral-500">👋 Hi! I'm Graciella.</p>
                <p className="text-xs text-neutral-400 mt-1">Ask me about my projects, skills, or studies.</p>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-tr-sm' 
                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-tl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-neutral-100">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="w-full bg-neutral-100 text-neutral-900 text-sm rounded-full pl-4 pr-12 py-3 outline-none focus:ring-1 focus:ring-black/5 transition-all"
                disabled={loading}
              />
              <button 
                onClick={sendMessage} 
                disabled={!input.trim() || loading}
                className="absolute right-2 p-2 bg-black text-white rounded-full hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> : <ArrowRight size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}