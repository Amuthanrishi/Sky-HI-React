import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Subscribers from './Components/Subscribers/subscribers'
import Travellers from './Components/Travellers/Travellers'
import Support from './Components/Support/Support'
import Search  from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import Lounge from './Components/Lounge/Lounge'
import Info from './Components/Info/Info'
import Home from './Components/Home/Home'
import Any from './Components/Any/Any'



const App = () =>{
  return(
    <div>
    
     <Navbar/>
     <Home/>
     <Search/>
     <Support/>
     <Info/>
     <Lounge/>
     <Travellers/>
     <Subscribers/>      
     <Footer/> 
   </div>
  )

}


export default App