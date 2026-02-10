import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
export function Input({ value, placeholder, className, ...rest }) {
    return (<input {...rest}
        placeholder={placeholder ?? value}
        className={` p-2 border rounded w-full ${className}`}
        value={value}
    />)
}
export function Textarea({ value, placeholder, className, ...rest }) {

    return (
        <textarea {...rest} placeholder={placeholder ?? value}
            className={`mb-3 p-2 border rounded w-full ${className}`}
            value={value}></textarea>
    )
}

export function Images({ className = "", alt = "Image", ...rest }) {
    return (
        <img
            {...rest}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
        />
    );
}

export function CustomButton({ children, text, ...rest }) {
    return (
        <button type="button" className="border border-white px-6 py-2 rounded hover:text-blue-900" {...rest}>
            {children ?? text}
        </button>
    );
}
export function CustomError({ children, text, ...rest }) {
    return (
        <p {...rest} className="text-red-500  flex items-start text-sm">
            {children ?? text}
        </p>
    )
}


export function CustomRoundedButton({ children, text, className, ...rest }) {
    return (
        <button type="button" className={`w-8 h-8 bg-blue-400 ${className ? className : "bg-blue-400"} rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer`} {...rest}>
            <span className="text-white text-xs"> {children ?? text} </span>
        </button>
    );
}


export function CustomLink({ children, text, ...rest }) {
    return (
        <Link  {...rest} > {children ?? text}</Link>
    )
}

export function CustomNavLink({
    text,
    children,
    className = "",
    activeFun,
    end,
    ...rest
}) {
    return (
        <NavLink {...rest} end={end} className={({ isActive }) => {
            // Base class
            const baseClass = `flex items-center space-x-3 transition-colors ${className}`;
            // Active / inactive
            const activeClass = isActive ? "text-blue-600 font-semibold" : "text-gray-600";

            // Optional custom active function
            if (activeFun) return `${baseClass} ${activeFun(isActive)}`;

            return `${baseClass} ${activeClass}`;
        }}
        >
            {children ?? text}
        </NavLink>
    );
}
export function CustomLoading({ text, messgae, children }) {

    return (
        <div className="text-center py-20">
            <div className="loading-spinner mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold mb-2">{text}</h2>
            <p className="text-gray-600">
                {messgae ?? children}
            </p>
        </div>
    );
}




export function CustomNotification({ message, type = 'info', children }) {
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
