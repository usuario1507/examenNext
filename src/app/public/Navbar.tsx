
const Navbar = () => {
    return (
      <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Gamas</a></li>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Acerca de</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
        </ul>
      </nav>
    );
  }