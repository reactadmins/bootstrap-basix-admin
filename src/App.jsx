import { Fragment, useState } from "react";
import { EntypoSprite } from "@entypo-icons/react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes.jsx";
import Layouts from "./layouts/Layouts.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { DashboardDataProvider } from "./context/dashboardDataContext.jsx";


function App() {
    const [sidebarMini, setSidebarMini] = useState(false);
    return (
        <div className="admin-container position-relative">
            <DashboardDataProvider>
                <EntypoSprite />
                <Routes>
                    {routes?.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                {(item?.path && (
                                    <Route
                                        path="/"
                                        element={
                                            <Layouts
                                                sidebarMini={sidebarMini}
                                                setSidebarMini={setSidebarMini}
                                            />
                                        }
                                    >
                                        <Route
                                            path={item?.path}
                                            element={<item.component />}
                                        />
                                    </Route>
                                )) ||
                                    (item?.route && (
                                        <Route
                                            path={item?.route}
                                            element={<item.component />}
                                        />
                                    ))}
                            </Fragment>
                        );
                    })}
                </Routes>
            </DashboardDataProvider>
        </div>
    );
}

export default App;

