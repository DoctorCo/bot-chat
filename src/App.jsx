import "./App.css";
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chat with <i className="fas fa-robot"></i></h1>
      </header>

      <section>
        <ChatRoom />
      </section>
    </div>
  );
}


export default App;
