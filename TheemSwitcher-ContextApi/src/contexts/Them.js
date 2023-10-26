import { createContext, useContext } from "react";

export const ThemContext = createContext({
    theme: "light",
    darktheme: () => { },
    lighttheme: () => { }
})

export const ThemProvider = ThemContext.Provider

export default function useThem() {
    return useContext(ThemContext)
}
