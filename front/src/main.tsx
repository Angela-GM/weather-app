import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
          <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
)
