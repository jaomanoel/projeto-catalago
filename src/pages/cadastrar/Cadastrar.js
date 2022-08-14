import Header from '../../components/Header';
import CadastrarPerguntas from '../../components/CadastrarPerguntas';

const Cadastrar = () => {
    return(
        <div className="Cadastrar">
            <div>
                <div>
                    <h1>LOGO</h1>
                </div>

                <div className="header-nav">
                    <div>
                        <Link className="nav-link" to="/cadastrar">CADASTRAR ANUNCIO</Link>
                        <Link className="nav-link" to="/">EXIBIR ANUNCIOS</Link>
                    </div>

                    <div>
                        <form>
                            <label htmlFor="pesquisa" className="sr-only">Procurar anuncios</label>
                            <input type="text" name="pesquisa" onChange={valueInput}></input>

                            <button type="Submit" onClick={handleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="navResponsive">
                    <input type="checkbox" id="checkbox-menu"/>

                    <label htmlFor="checkbox-menu">
                        <div id = "linha1"></div>
                        <div id = "linha2"></div>
                        <div id = "linha3"></div>
                    </label>

                    <div className="menu">
                        <ul>
                            <li>
                                <Link className="nav-link" to="/cadastrar">CADASTRAR ANUNCIO</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/">EXIBIR ANUNCIOS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                <CadastrarPerguntas />
            </main>

            <footer>
                <h2>DESENVOLVIDO POR JOAO MANOEL</h2>
            </footer>
        </div>
    )

}

export default Cadastrar;