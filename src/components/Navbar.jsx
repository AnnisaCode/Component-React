function Navbar({ links }) {
    return (
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-gray-400">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;  