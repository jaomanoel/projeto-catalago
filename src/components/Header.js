import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header-cadastrar">
                <div>
                    <h1>LOGO</h1>
                </div>

                <div className="header-nav">
                    <div>
                        <Link className="nav-link" to="/cadastrar">CADASTRAR ANUNCIO</Link>
                        <Link className="nav-link" to="/">EXIBIR ANUNCIOS</Link>
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
                                <p>
                                    <Link className="nav-link" to="/cadastrar">CADASTRAR ANUNCIO</Link>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <Link className="nav-link" to="/">EXIBIR ANUNCIOS</Link>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;