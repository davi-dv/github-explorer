import './styles/global.scss';
import { RepositoryList  } from './components/RepositoryList';
import { Counter } from './components/Contador';
export function App() {

  // throw new Error(console.log('eita o forninho se foi'))
  return ( 
    <>
      <RepositoryList/>
      <Counter/>
    </>
  );
}
// Utilizamos o fragment para envolver multiplos componentes na função render do App.jsx