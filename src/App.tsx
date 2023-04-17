
import React from 'react';
import Todos from './components/Todos';

const  App: React.FC = () => {

  return (
    <div>
      <Todos items={['Learn React', 'Learn CSS']}/>
    </div>
  );
}

export default App
