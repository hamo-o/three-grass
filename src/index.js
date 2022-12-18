// Made by @CantBeFaraz https://twitter.com/CantBeFaraz/status/1506986428341063681

import { render } from 'react-dom'
import './styles.css'
import { App } from './App'
import Cat from './Cat'
import ChineseMerganser from './ChineseMerganser'
import Bird from './Bird'
import Goat from './Goat'
import Owl from './Owl'
import Fish from './Fish'
import Goose from './Goose'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MapAll from './MapAll'

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail/1" element={<Cat />} />
      <Route path="/detail/2" element={<ChineseMerganser />} />
      <Route path="/detail/3" element={<Bird />} />
      <Route path="/detail/4" element={<Goat />} />
      <Route path="/detail/5" element={<Owl />} />
      <Route path="/detail/6" element={<Fish />} />
      <Route path="/detail/7" element={<Goose />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
