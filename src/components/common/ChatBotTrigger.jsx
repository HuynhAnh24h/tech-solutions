import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

const idleMessages = [
  'Bạn cần tôi hỗ trợ gì không?',
  'Tôi đang trực ở đây nha',
  'Tôi sẽ giải quyết thắc mắc của bạn về Dịch vụ của công ty nhé',
  'Cần gì cứ nhấn tôi nhé!',
  'Bé bot này thân thiện lắm á !!!'
];

const ChatBotTrigger = () => {
  const [open, setOpen] = useState(false);
  const [botThinking, setBotThinking] = useState(idleMessages[0]);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // Xử lý dòng suy nghĩ
  useEffect(() => {
    const interval = setInterval(() => {
      if (!open) {
        const i = Math.floor(Math.random() * idleMessages.length);
        setBotThinking(idleMessages[i]);
      } else {
        setBotThinking('Bot đang trực tuyến 🟢');
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;
    setChat(prev => [...prev, { type: 'user', text: input }]);
    setLoading(true);
    setInput('');

    // Giả lập phản hồi từ bot
    setTimeout(() => {
      setChat(prev => [...prev, { type: 'bot', text: 'Phản hồi từ bot 💬' }]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Bong bóng suy nghĩ */}
      {!open && (
        <div className="mb-2 bg-white px-3 py-1 text-sm text-gray-600 shadow rounded-full animate-pulse">
          {botThinking}
        </div>
      )}

      {/* Nút icon bot */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:bg-green-600 text-gray-800 p-4 rounded-full shadow-lg"
      >
        <FaRobot size={28} />
      </button>

      {/* Khung chat */}
      {open && (
        <div className="mt-3 w-[300px] h-[400px] bg-white rounded-xl shadow-lg p-4 flex flex-col animate-fade-up">
          <div className="text-sm text-green-600 font-semibold mb-2">{botThinking}</div>

          <div className="flex-1 overflow-auto text-sm text-gray-700 mb-2">
            {chat.map((msg, i) => (
              <div key={i} className={`mb-1 ${msg.type === 'user' ? 'text-right text-blue-500' : 'text-left text-gray-700'}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-left text-gray-400 italic animate-pulse">Bot đang phản hồi...</div>
            )}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-3 py-2 border rounded text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-green-500 text-white px-3 rounded text-sm hover:bg-green-600"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotTrigger;
