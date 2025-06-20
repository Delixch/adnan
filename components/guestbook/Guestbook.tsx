"use client";

import { useState } from 'react';
import Swal from 'sweetalert2';

// Basit bir kelime filtresi. Bu liste genişletilebilir.
const badWords = ["sex", "test", "deneme", "kötü"]; // Buraya istenmeyen kelimeler eklenebilir.

export const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const containsBadWords = (text: string) => {
    const lowerCaseText = text.toLowerCase();
    return badWords.some(word => lowerCaseText.includes(word));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
        Swal.fire('Fehler!', 'Bitte füllen Sie alle Felder aus.', 'error');
        return;
    }
    
    if (containsBadWords(name) || containsBadWords(message)) {
      Swal.fire('Fehler!', 'Ihre Nachricht enthält unangemessene Wörter. Bitte korrigieren Sie sie.', 'error');
      return;
    }

    // --- Mesaj gönderme simülasyonu ---
    console.log({ name, message });

    Swal.fire({
        title: 'Erfolg!',
        text: 'Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank!',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
    });

    // Formu temizle
    setName('');
    setMessage('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg">
        <h2 className="font-bold text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 mb-6 text-center">
            Gästebuch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ihr Name"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ihre Nachricht an mich..."
                />
            </div>
            <div className="text-center pt-4">
                <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform hover:scale-105"
                >
                    Nachricht senden
                </button>
            </div>
        </form>
    </div>
  );
}; 