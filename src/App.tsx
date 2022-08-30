import React from 'react';
import './styles/App.scss';
import PageBody from './components/page-body';



const App:React.FC = () => {
  return(
    <PageBody  
     h1Element='This is a title' 
     h2Element='Lorem ipsum dolor sit amet consectetur.'
     pElement='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem vero ratione vitae dicta explicabo
     perferendis amet quis provident molestiae magni!'
     aElement='Click Me'
    />
  )

}

export default App;
