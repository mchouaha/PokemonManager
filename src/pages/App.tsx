import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { fetchListPokemon } from '../lib/api'
import { PokemonType } from '../lib/interfaces'

import AddPokemon from './addPokemon'
import ListPokemon from './listPokemon'

import './App.css'

function App() {

  const [listPokemon, setListPokemon] = useState<PokemonType[]>([])

  const addPokemon = (newPokemon: PokemonType) => setListPokemon([...listPokemon, newPokemon])

  useEffect( () => {
    fetchListPokemon().then( (result) => setListPokemon(result))
  }, [])

  return (
    <div className="App">
      
      <header className="App-header">
        <p className='App-title'>Pokemon Manager</p>
      </header>

      <Routes>
        <Route path="/" element={<ListPokemon list={listPokemon}/>} />
        <Route path="/addPokemon" element={<AddPokemon addPokemon={addPokemon}/>} />
      </Routes>
    
    </div>
  );
}

export default App
