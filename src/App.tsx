import React from 'react'
import { SectionData } from '../AppData/Section/Section'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
    return (
        <div className='App'>
            <Header />
            <Home data={SectionData} />
        </div>
    )
}

export default App
