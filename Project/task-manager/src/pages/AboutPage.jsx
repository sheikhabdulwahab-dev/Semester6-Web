import { useTheme } from '../context/ThemeContext'

function AboutPage() {
  const { isdark } = useTheme()

  return (
    <div className={`max-w-3xl mx-auto p-10 text-center ${isdark ? 'text-white' : 'text-gray-800'}`}>

      <h1 className="text-4xl font-bold text-blue-500 mb-4">Task Manager</h1>

      <p className="text-lg mb-6">
        A simple app to manage your daily tasks. Add tasks, set priority, mark complete, and search easily.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        <div className={`p-6 rounded-xl ${isdark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-bold mb-2">⚛️ React</h3>
          <p className="text-sm">Built with hooks — useState, useEffect, useContext, useMemo, useCallback, useRef</p>
        </div>

        <div className={`p-6 rounded-xl ${isdark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-bold mb-2">🎨 Tailwind</h3>
          <p className="text-sm">Styled with Tailwind CSS v4 — responsive and dark mode ready</p>
        </div>

        <div className={`p-6 rounded-xl ${isdark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-bold mb-2">💾 localStorage</h3>
          <p className="text-sm">Tasks saved in browser — data survives page refresh</p>
        </div>

      </div>

    </div>
  )
}

export default AboutPage
