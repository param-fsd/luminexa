import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I assist you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    try {
      const response = await fetch('/api/dialogflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input })
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { text: data.response || 'Sorry, I didn’t understand that.', sender: 'bot' }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: 'Oops, something went wrong. Try again!', sender: 'bot' }
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] font-montserrat">
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onClick={() => setIsOpen(true)}
          className="bg-black text-white rounded-full p-4 shadow-2xl border border-border/40"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </motion.button>
      )}

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: 50 }}
            className="rounded-xl shadow-2xl border border-border/40 w-80 sm:w-96 h-[400px] flex flex-col bg-background"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-semibold">nexAi Luminexa</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/30">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-background text-foreground border border-border/40'
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-border/40">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-lg border border-border/40 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  onClick={sendMessage}
                  className="bg-black text-white p-2 rounded-lg hover:bg-primary/90"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;