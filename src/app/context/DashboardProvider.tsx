"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const DashboardContext = createContext<any>({});

// Custom hook to use the context
export const useDashboardContext = () => useContext(DashboardContext);

// Provider component
export const DashboardContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prevCollapsed => !prevCollapsed);
    }

    // Collect all global variables & functions 
    const contextData = {
        collapsed,
        toggleCollapsed,
    }

    return (
        <DashboardContext.Provider value={contextData}>
            {children}
        </DashboardContext.Provider>
    );
};
