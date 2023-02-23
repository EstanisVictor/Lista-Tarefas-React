import * as c from './App.styles'
import { useState } from 'react'
import { Item } from './types/item'
import { ListItem } from './components/ListItem/listItem';

const App = () =>{
  
  const [list, setList] = useState<Item[]>([
    {id:1, 
      description: 'Comprar Remedio', 
      done: false
    },
    {id:2, 
      description: 'Estudar...', 
      done: false
    }
  ]);
  
  return(
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas</c.Header>
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </c.Area>
    </c.Container>
  );
}

export default App;