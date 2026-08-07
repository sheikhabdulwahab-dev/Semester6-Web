import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [search, setSearch] = useState('')

  return (
    <ThemeProvider>
      <BrowserRouter>

        <Navbar search={search} setsearch={setSearch} />

        <div className="flex justify-center gap-6 py-3 border-b">
          <Link to="/" className="text-blue-500 font-semibold hover:underline">Tasks</Link>
          <Link to="/about" className="text-blue-500 font-semibold hover:underline">About</Link>
        </div>

        <Routes>
          <Route path="/" element={<TasksPage search={search} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
