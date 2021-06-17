import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const Card = () => {
    const ctx = useContext(ThemeContext)

    const handleToggleTheme = () => {
        ctx.setTheme(ctx.theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className={`card theme-${ctx.theme}`}>
            <div>
                {ctx.theme}
            </div>
            <div>
                <button onClick={handleToggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default Card
