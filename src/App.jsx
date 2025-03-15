import './App.css'
import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const navLinks = [
   { text: "Home", href: "/"},
   { text: "About", href: "/about"},
   { text: "Contact", href: "/contact"},
  ];

  return (
    <>
      <div>
        <Button text="Click Me" onClick={handleClick} color="blue" size="lg" />
        <Navbar links={navLinks}/>
        <h1 className="p-4">Welcome to My Life</h1>
      </div>
    </>
  );
}

export default App;