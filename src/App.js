import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  let todos = [
    {
      sno:1,
      title:"GO to the market!",
      desc:"go to the market to buy vegetables tonight"
    },
    {
      sno:2,
      title:"homework",
      desc:"complete your homework"
    },
    {
      sno:3,
      title:"coding",
      desc:"finish the react web application"
    }
  ];
  return (
    <>
      <Header title="My TODO list"/>
      <Todos todos = {todos}/>
      <Footer />
    </>
  );
}

export default App;
