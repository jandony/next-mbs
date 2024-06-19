"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const SiteContext = createContext<any>({});

// Custom hook to use the context
export const useSiteContext = () => useContext(SiteContext);

// Provider component
export const SiteContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setDarkMode] = useState(false);
    // Effect to set initial dark mode state based on user preference or default value
    // useEffect(() => {
    //     const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //     setDarkMode(darkMode);
    // }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const bodyDocument = document.body;
        bodyDocument.classList.toggle('dark');
        setDarkMode(prevMode => !prevMode);
    };

    // Collect all global variables & functions 
    const contextData = {
        isDarkMode,
        toggleDarkMode
    }

    return (
        <SiteContext.Provider value={contextData}>
            {children}
        </SiteContext.Provider>
    );
};
