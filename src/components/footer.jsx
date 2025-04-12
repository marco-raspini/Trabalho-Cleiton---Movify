import './footer.css'

import homeBtn from "../images/home.png"
import favoriteBtn from "../images/favorite.png"


function Footer() {
    return (
      <>
        <div class="footer">
          <div class="options">
            <img src={homeBtn} />
            <p>Home</p>
          </div>
          <div class="options">
            <img src={favoriteBtn} />
            <p>Favorito</p>
          </div>
        </div>
      </>
    )
  }
  export default Footer