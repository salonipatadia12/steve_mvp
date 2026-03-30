"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChat } from './ChatProvider';

const QUICK_ACTIONS = [
  { icon: '📅', label: 'Calendar' },
  { icon: '📝', label: 'Enroll' },
  { icon: '🏫', label: 'Find school' },
  { icon: '🍽️', label: 'Menus' },
  { icon: '🚌', label: 'Bus info' },
  { icon: '📞', label: 'Contact' },
];

export default function ChatWidget() {
  const { isChatOpen, toggleChat, closeChat, messages, sendMessage, isTyping } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (label: string) => {
    sendMessage(label);
  };

  return (
    <>
      {/* Collapsed button */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={toggleChat}
            className="fixed bottom-6 left-6 z-40 bg-[#003057] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#00566B] transition-colors flex items-center gap-2 font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded chat panel */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 left-6 z-40 w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#003057] rounded-t-2xl px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WPS Text Chat</span>
              </div>
              <button
                onClick={closeChat}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {/* Welcome message */}
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm max-w-[85%]">
                  <p className="text-sm">
                    Hi! I&apos;m the WPS text assistant. Ask me about enrollment, schools, calendars, meals, transportation, or anything else about Wichita Public Schools.
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[85%] ${
                      message.role === 'user'
                        ? 'bg-[#003057] text-white rounded-tr-sm'
                        : 'bg-white text-gray-800 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions */}
            <div className="px-3 py-2 border-t bg-white overflow-x-auto">
              <div className="flex gap-2 pb-1">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.label)}
                    className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap"
                  >
                    <span className="mr-1">{action.icon}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input area */}
            <div className="border-t p-3 bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#003057] text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-[#C8102E] text-white rounded-full flex items-center justify-center hover:bg-[#A00D25] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
