import * as React from "react"
import { createRoot } from 'react-dom/client'
import "./App.css"

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="w-full h-full bg-blue">
      <div className="text-blue-100">FOOBAR</div>
    </div>
  </React.StrictMode>,
)
