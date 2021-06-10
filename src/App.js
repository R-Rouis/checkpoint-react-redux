import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import Filtre from './Components/Filtre';



function App() {
  return (
    <div className="todoapp">
      <h1 style={{textAlign:'center'}}>"To-do list"</h1>
      <div>
        <AddTask />
        <Filtre />
        <ListTask />
      </div>
    </div>
  );
}
export default App;
