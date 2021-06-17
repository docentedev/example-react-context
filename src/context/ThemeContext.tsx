import { createContext, useState } from 'react'

// Definimos tipos basicos
type Theme = 'dark' | 'light'

interface IThemeContext {
    theme: Theme
    setTheme: (theme: Theme) => void,
}

// Creamos un contexto tipado
const ThemeContext = createContext<IThemeContext>({
    theme: 'light',
    setTheme: (_theme) => { },
})

// generamos un proveedor que mantenga
// el estado del contexto
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
    const [theme, setTheme] = useState<Theme>('light')
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Exportamos el contexto
export default ThemeContext