
import './home.css'

import PopCorn from "../images/pop-corn.png"
import cartaz1 from "../images/sonic3.jpg"

export default function Home() {
    return (
        <>
            <Alta />

            <Explore />
        </>
    );
}


function Alta() {
    return (
        <>
            <div class="alta">
                <div class="emAlta">EM ALTA</div>

                <div class="filmes">
                    <img class="cartaz" src={cartaz1} />
                    <div class="tools">
                        <h6>Sonic 3</h6>
                        <div class="nota">
                            <img class="popcorn" src={PopCorn} />
                            <h6>6,9/10</h6>
                        </div>

                        <div class="buttons">
                            <button class="altaBtn"><link to="/movieInfos" />Saiba mais</button>
                            <button class="altaBtn">Favoritar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



function Explore() {
    return (
        <>
            <div class="explore">
                <h4>Explore novas aventuras:</h4>
                <div class="generos">
                    <button class="buttonExplore acao">#Ação</button>
                    <button class="buttonExplore terror">#Terror</button>
                    <button class="buttonExplore comedia">#Comédia</button>
                    <button class="buttonExplore ficcao">#Ficção</button>
                    <button class="buttonExplore suspense">#Suspense</button>
                    <button class="buttonExplore romance">#Romance</button>
                </div>

            </div>
        </>
    )
}
