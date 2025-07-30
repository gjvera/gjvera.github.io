import * as React from "react"
import { createRoot } from 'react-dom/client'
import "./App.css"

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="text-blue-500">FOOBAR</div>
  </React.StrictMode>,
)
