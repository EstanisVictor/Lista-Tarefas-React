import * as c from './App.styles'
import { useState } from 'react'
import { Item } from './types/item'
import { ListItem } from './components/ListItem/listItem';
import { NewArea } from './components/NewArea/newArea';

const App = () =>{
  
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      description: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return(
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas</c.Header>

        <NewArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
          />
        ))}
      </c.Area>
    </c.Container>
  );
}

export default App;