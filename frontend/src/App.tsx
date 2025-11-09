import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'
import TopBar from './components/topBar'
import CandidateList from './components/candidateList'

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="min-h-screen bg-[#f7f8f7]">
      {/* Page Title */}
      <TopBar />

      <div className="flex">
        {/* Sidebar - Pre-built component with search, toggle, dropdown */}
        <Sidebar searchValue={searchValue} onSearchChange={setSearchValue} />

        {/* Main Content */}
        <CandidateList />

      </div>
    </div>
  )
}

export default App
