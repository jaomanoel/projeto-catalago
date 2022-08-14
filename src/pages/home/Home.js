import React, {useEffect, useState} from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import Main from '../../components/Main';

const Home = () =>{
    const [listGames, setListGames] = useState();
    const [search, setSearch] = useState({
        pesquisa: ""
    })
    const [listSearch, setListSearch] = useState()

    console.log(listSearch)
    useEffect(() => {
        Axios.get("https://quiet-crag-18542.herokuapp.com/").then((response) => { 
            setListGames(response.data); 
        });
    }, []);

    const valueInput = (e) => setSearch({...search, [e.target.name]: e.target.value})

    const handleSearch = (e) => {
        e.preventDefault();
        
        Axios.get("https://quiet-crag-18542.herokuapp.com/pesquisa/" + search.pesquisa
        ).then((response) => {
            setListSearch(response.data)
        }
        ).catch((response) => {console.log(response)})
    }
    
    

    return(
        <>
            <header className="App-header">
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
            </header>

            <main>
                {typeof listSearch === "undefined" && typeof listGames !== "undefined" && listGames.map((value) => {
                        return (
                            <Main 
                                key={value.id}
                                listGames={listGames}
                                setListGames={setListGames}
                                id={value.id}
                                title={value.titulo}
                                category={value.categoria}
                                content={value.assunto}
                            />
                        )   
                })}

                { typeof listSearch !== "undefined" && listSearch.map((val) => {
                    return (
                        <Main 
                            key={val.id}
                            listSearch={listSearch}
                            setListSearch={setListSearch}
                            id={val.id}
                            title={val.titulo}
                            category={val.categoria}
                            content={val.assunto}
                        />
                    )
                })}
            </main>

            <footer>
                <h2>DESENVOLVIDO POR JOAO MANOEL</h2>
            </footer>
        </>
    );
}

export default Home;