import React from 'react';
//Function component
function NaviBar()
{
    const styles=
    {
       Divi: { margin :1.0 ,positon: 'absolute' , right:0},
       item:{margin: 5.0,color:"blue"}
    };
    return(
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="container-fluid">

    <a className="navbar-brand" href="#">
        <img src="https://i.pinimg.com/originals/78/d5/96/78d596db2cc12b911e4404de3b3eb978.jpg" className="d-inline-block align-top" width='40' height='30' alt=''/> 
        AQUA</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={styles.Divi}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={styles.item}>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item" style={styles.item}>
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown" style={styles.item}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Lakes</a></li>
            <li><a className="dropdown-item" href="#">Lagoons</a></li>
            <li><a className="dropdown-item" href="#">Estuaries</a></li>
          </ul>
        </li>
      </ul>
      {/*searchbar*/}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>);
}

export default NaviBar;