"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const MainContext = createContext<any>({});

// Custom hook to use the context
export const useMainContext = () => useContext(MainContext);

// Provider component
export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
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
        <MainContext.Provider value={contextData}>
            {children}
        </MainContext.Provider>
    );
};
