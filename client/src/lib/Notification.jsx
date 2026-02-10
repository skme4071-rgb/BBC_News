import { useState, useEffect } from 'react';

export default function Notification({ message, type = 'info', children }) {
    const colors = {
        success: 'bg-green-600 text-white',
        error: 'bg-red-600 text-white',
        info: 'bg-blue-600 text-white',
        warning: 'bg-yellow-600 text-white'
    };

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 3000); // 3 সেকেন্ড পরে auto hide
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'} ${colors[type]}`}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                    {type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium">{message ?? children}</p>
                </div>
                <button onClick={() => setVisible(false)} className="flex-shrink-0 text-white/80 hover:text-white">
                    <span className="text-lg">×</span>
                </button>
            </div>
        </div>
    );
}
