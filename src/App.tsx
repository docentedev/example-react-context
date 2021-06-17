import './App.css'
import Card from './components/card/Card'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
