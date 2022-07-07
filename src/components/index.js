import React from "react";
import { Route, HashRouter as Router, Link, Routes } from 'react-router-dom'
import { rootRoutes } from "../routes/index.js";
import FindSmileFace from "./FindSmileFace/index.js";

function Nav() {
    return (

        <div>
            <Router>
                {rootRoutes.map((route, key) => {
                    return (
                        <div key={key}>
                            <Link to={route.path}>{route.name}</Link>
                            {route.children && route.children.map((route, key) => {
                                return (
                                    <div style={{ 'marginLeft': '10px' }} key={key}>
                                        <Link to={route.path}>{route.name}</Link>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <Routes>
                    {
                        rootRoutes.map((route, key) => {
                            return <Route
                                key={'route-' + key}
                                exact={route.exact}
                                path={route.path}
                                element={<route.component />} >
                                {route.children && route.children.map((route, key) => {
                                    return <Route
                                        key={'route-' + key}
                                        exact={route.exact}
                                        path={route.path}
                                        element={<route.component />} >
                                    </Route>
                                })}
                            </Route>
                        })
                    }

                </Routes>

            </Router>


        </div >

    )
}

export default Nav;