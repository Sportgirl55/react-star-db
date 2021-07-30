import React from 'react';


import './Header.scss'

const Header = () => {
  return (
    <div className="header">
       <h3>
        {/* <a href="#"> */}
          Star DB
        {/* </a> */}
      </h3>
      <ul className="header-list">
        <li>
        People
          {/* <a href="#">People</a> */}
        </li>
        <li>
        Planets
          {/* <a href="#">Planets</a> */}
        </li>
        <li>
        Starships
          {/* <a href="#">Starships</a> */}
        </li>
      </ul>
    </div>
  )
}

export default Header;





// const Header = () => {
//   return (
//     <div className="header d-flex">
//       <h3>
//         <a href="#">
//           Star DB
//         </a>
//       </h3>
//       <ul className="d-flex">
//         <li>
//           <a href="#">People</a>
//         </li>
//         <li>
//           <a href="#">Planets</a>
//         </li>
//         <li>
//           <a href="#">Starships</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;