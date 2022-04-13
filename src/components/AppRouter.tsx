import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";

const AppRouter = () => {
    const auth = false
    return (
        auth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path + `${route.exact ? '' : '/*'}`}
                           element={route.element}
                           key={route.path}/>
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.EVENT} replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path + `${route.exact ? '' : '/*'}`}
                           element={route.element}
                           key={route.path}/>
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.LOGIN} replace />}
                />
            </Routes>
    );
};

export default AppRouter;