function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <img className="brand-mark" src="/neon-archive.svg" alt="" />
        <div>
          <h1>NEON ARCHIVE</h1>
          <p>Independent city library</p>
        </div>
      </div>
      <span className="header-status">System online</span>
    </header>
  )
}

export default Header;

