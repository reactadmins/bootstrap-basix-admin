import { Fragment } from "react";
import { EntypoSprite } from "@entypo-icons/react";
import { Routes, Route } from "react-router-dom";
import routes from "@/routes.jsx";
import Layouts from "@/layouts/Layouts.jsx";
import { DashboardDataProvider } from "@/context/dashboardDataContext.jsx";


function App() {
    return (
        <div className="admin-container position-relative overflow-hidden">
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
                                            <Layouts />
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

