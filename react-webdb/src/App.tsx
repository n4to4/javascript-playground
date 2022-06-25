import logo from './logo.svg'
import './App.css'
import { Hello, Counter, Timer, RenderCount } from './Hello'
import { Links } from './Links'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Hello target="Hello React" interval={2000} />
        <Counter />
        <Timer />
        <Links />
        <RenderCount />
      </header>
    </div>
  )
}

export default App
