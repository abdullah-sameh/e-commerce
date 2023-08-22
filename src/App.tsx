import RoutesComponent from './RoutesComponent'
import MainNav from './components/MainNav'
import SubNav from './components/SubNav'
import 'animate.css'
import Footer from './pages/Footer'

function App() {
  return (
    <div data-theme='lemonade'>
      <header>
        <MainNav />
        <SubNav />
      </header>
      <main>
        <RoutesComponent />
      </main>
      <Footer />
    </div>
  )
}

export default App
