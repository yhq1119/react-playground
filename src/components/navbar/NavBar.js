import React from 'react';
import { Link } from 'react-router-dom';
// import './Landing.css';

function NavBar() {
    return(
      <div>
          <tr>
              <td>
<Link to={'/'}>

                  Link 1
</Link>

              </td>
              <td>
                  Link 2
              </td>
              <td>
                  Link 3
              </td>

          </tr>
      </div>
    );


}


export default NavBar;