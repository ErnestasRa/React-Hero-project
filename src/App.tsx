import React from 'react';
import './styles/App.scss';
import PageBody from './components/page-body';



const App:React.FC = () => {
  return(
    <PageBody  
     h1Element='Cia yra burgeris' 
     h2Element='Net labai skanus burgeris.'
     pElement='Realiai, tiesa pasakius, nemeluojant, nesnekant uz akiu, tai yra pats skaniausias burgeris!'
     aElement='Click Me'
    />
  )

}

export default App;
