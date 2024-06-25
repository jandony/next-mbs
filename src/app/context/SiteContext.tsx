"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'

// Create the context
const SiteContext = createContext<any>({});

// Custom hook to use the context
export const useSiteContext = () => useContext(SiteContext);

// Provider component
export const SiteContextProvider = ({ children }: { children: React.ReactNode }) => {
    const storedDarkMode = localStorage.getItem("dark-mode-preference");
    const darkMode = storedDarkMode ? JSON.parse(storedDarkMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkMode, setDarkMode] = useState(darkMode);

    useEffect(() => {
        const bodyDocument = document.body;
        if (isDarkMode) {
            bodyDocument.classList.add('dark');
        } else {
            bodyDocument.classList.remove('dark');
        }
        localStorage.setItem("dark-mode-preference", JSON.stringify(isDarkMode));
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            if (typeof window !== 'undefined') {
                localStorage.setItem("dark-mode-preference", newMode.toString());
            }
            document.body.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    // Collect all global variables & functions 
    const contextData = {
        isDarkMode,
        toggleDarkMode,
        // session
    }

    return (
        <SiteContext.Provider value={contextData}>
            {children}
        </SiteContext.Provider>
    );
};
