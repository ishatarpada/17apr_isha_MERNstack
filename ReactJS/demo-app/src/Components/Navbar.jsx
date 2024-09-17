
export default function Navbar() {
  const menus = [
    {
      label: "Home",
      href: "/home"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact Us",
      href: "/contact-us"
    },
  ]

  const listStyle = { color: "black", textDecoration: "none" }

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    padding: "5px",
    boxShadow: "0px 8px 8px 0px rgba(0, 0 , 0, 0.1)"
  }

  const logoStyle = {
    display: "flex",
    gap: "20px"
  }

  const list = {
    display: "flex",
    justifyContent: "end",
    gap: "25px",
    listStyle: "none"
  }
  return (
    <>
      <nav style={navStyle}>

        <div className="logo" style={logoStyle}>
          <img src="https://png.pngtree.com/png-vector/20230306/ourmid/pngtree-scool-college-logo-victor-vector-png-image_6634445.png" width={"50px"}></img>
          <h1>CodeSchool</h1>
        </div>

        <ul style={list}>
          {menus.map((menu, index) => {
            return (
              <li key={index} ><a href={menu.href} style={listStyle}>{menu.label}</a></li>
            )
          })}
        </ul>

      </nav>
    </>
  )
}
