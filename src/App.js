import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './component/Layout/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default App
