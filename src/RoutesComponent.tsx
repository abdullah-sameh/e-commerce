import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}
