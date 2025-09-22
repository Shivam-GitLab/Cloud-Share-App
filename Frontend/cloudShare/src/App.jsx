
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import MyFiles from './pages/MyFiles'
import Subscription from './pages/Subscription'
import Transactions from './pages/Transactions'
import PublicFileview from './pages/PublicFileview'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/subscriptions" element={<Subscription />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/public-fileview" element={<PublicFileview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
