import React, {FC} from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string;
    element: React.ReactElement;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN="/login",
    EVENT="/"
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, element: React.createElement(Login)}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, element: React.createElement(Event)}
]