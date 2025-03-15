import './App.css'
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Welcome Back</h1>
      <Button text="Click Me" onClick={handleClick} color="blue" size="lg" />
    </div>
  );
}

export default App;