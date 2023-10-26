import React from 'react';
import { ThemProvider } from './contexts/Them';
import Card1 from './components/Card1';
import ThemBtn from './components/ThemBtn';
import { useState } from 'react';
import { useEffect } from 'react';

function Appp() {

    const [theme, setTheme] = useState("light")

    const darktheme = () => {
        setTheme("dark")
    }

    const lighttheme = () => {
        setTheme("light")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(theme)
    }, [theme])

    return (
        <ThemProvider value={{theme, lighttheme, darktheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

                        <ThemBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card1 />
                    </div>
                </div>
            </div>
        </ThemProvider>
    );
}

export default Appp;