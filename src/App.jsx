import Home from './Pages/Home'; //Import for Home component
import BackToTopButton from './components/BackToTopButton'; //Import for Back-to-top button 
import 'bootstrap/dist/css/bootstrap.min.css'; //Import for Bootstrap CSS


function App(){
  return(
    <>
    <Home />  {/*Home component */}
    <BackToTopButton />  {/*Back-To-Top Button Component */}
    </>
  )
}

export default App;