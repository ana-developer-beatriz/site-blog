import React from 'react';

function Header(props) {
  const {cor, page1, page2, page3} = props;

  const styleHeader = {
    backgroundColor: cor,
    color: 'black',
    //textDecoration: 'underline',
    display:'inline-block',
    margin:'0 0 0 15px',
    
  };

  return (
    <header>
    <nav >
      <ul>
        <li style={styleHeader}>
          <a href="/">{page1}</a>
        </li>
        <li style={styleHeader}>
          <a href="/about">{page2}</a>
        </li>
        <li style={styleHeader}>
          <a href="/contact">{page3}</a>
        </li>
      </ul>
    </nav>
  </header>
  // <ul>
  //   {text.map((item,index) => (
  //     <li style={styleHeader} key={index}>
  //       {page.map((link, index) =>(
  //         <a key={index} href={link}/>
  //       ))}{item}</li>
  //   ))}
  // </ul>
  );
}

export default Header;