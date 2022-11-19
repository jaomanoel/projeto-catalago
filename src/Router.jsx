import {HashRouter, BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Cadastrar from "./pages/cadastrar/Cadastrar"
import Home from "./pages/home/Home";

function Router() {
    return(
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route exact path='/cadastrar'>
                        <Cadastrar />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Router;