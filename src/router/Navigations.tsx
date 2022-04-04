import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";

import logo from "../logo.svg";



export const Navigations = () => {
  return (

    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />

          <ul>
            {routes.map(({to,name}) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(({path,Component}) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>



    </Suspense>
    
  );
};
