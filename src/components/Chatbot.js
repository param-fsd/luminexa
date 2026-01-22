"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Sparkles, Bot, Loader2, ShieldCheck } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    { text: "Hi! I’m <b>nexAi</b> 👋<br/>How can I help you today?", sender: "bot" },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const quickReplies = useMemo(
    () => ["WebAR", "Image Mapping", "360 Tour", "3D Walkthrough"],
    []
  );

  // 🔒 INPUT TYPING STOPPED FOR NOW (disabled input + disabled send)
  const sendMessage = async (e) => {
    e.preventDefault();
    return; // do nothing for now
  };

  return (
    // ✅ Mobile: move widget up a bit using bottom-20, Desktop stays bottom-6
    <div className="fixed bottom-25 md:bottom-6 right-6 z-[9999]">
      {/* Absolute stack wrapper */}
      <div className="relative w-[340px] h-[490px] pointer-events-none">
        {/* OPEN BUTTON */}
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={false}
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.96 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto absolute bottom-0 right-0"
        >
          <div className="absolute -inset-3  rounded-full blur-xl" />
          <div className="relative flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 shadow-xl">
            <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </span>
            <div className="text-left">
              <div className="text-sm font-semibold">nexAi</div>
              <div className="text-[10px] text-muted-foreground">
                Ask Luminexa
              </div>
            </div>
          </div>
        </motion.button>

        {/* CHAT WINDOW */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.99 }}
              transition={{ duration: 0.22 }}
              className="pointer-events-auto absolute bottom-0 right-0 w-[340px] h-[490px] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden"
            >
              {/* HEADER */}
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">nexAi</div>
                    <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Secure assistant
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-lg hover:bg-muted/40 flex items-center justify-center"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* QUICK REPLIES (still shown, but input is disabled) */}
              <div className="px-3 py-2 flex flex-wrap gap-2 border-b border-border">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    type="button"
                    disabled
                    className="text-[10px] px-2.5 py-1 rounded-full border border-border bg-muted/30 opacity-60 cursor-not-allowed"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* MESSAGES */}
              <div className="flex-1 px-4 py-3 overflow-y-auto bg-muted/20 text-[12px] space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] px-3 py-2 rounded-xl ${
                        msg.sender === "user"
                          ? "bg-foreground text-background"
                          : "bg-background border border-border"
                      }`}
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  </div>
                ))}

                {isTyping && (
                  <div className="text-[11px] text-muted-foreground flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    nexAi is typing...
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* INPUT (DISABLED) */}
              <form onSubmit={sendMessage} className="p-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <input
                    value={input}
                    disabled
                    placeholder="Chat coming soon..."
                    className="flex-1 h-9 rounded-lg border border-border px-3 text-[13px] focus:outline-none bg-muted cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled
                    className="h-9 w-9 rounded-lg bg-foreground text-background flex items-center justify-center opacity-40 cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1 text-[9px] text-muted-foreground">
                  nexAi is under training 🚧
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chatbot;

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
