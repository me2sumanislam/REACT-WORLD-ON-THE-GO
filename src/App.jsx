 import Countries from './Componant/Countries/Countries'
import './App.css'
import { Suspense } from 'react'

 const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
                        .then(res => res.json())
                       
                         



function App() {
   


  return (
    <>
     
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loding Countries ....</h3>}>
      <Countries  contriesPromise ={ contriesPromise} ></Countries>
     </Suspense>
   
       
    </>
  )
}

export default App
