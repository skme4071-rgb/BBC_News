// dashboard leyout
import Header from "./Header";
import { Nav } from "./Card/AllCard";
import { Outlet } from "react-router-dom";
import { generateRoleRoutes } from "./../Dashboard/Config";


// USER ROLES
const Roles = ["Reporter", "Editor", "Manager", "Admin"];
const routeNav = (generateRoleRoutes("Editor"))


export function Dashboard_Leyout() {

    return (
        <div className="bg-gray-50 transition-colors duration-300">
            <Header />


            <div className="flex">

                <Nav datas={routeNav} badge={[{ newBadge: "dot", }]} />
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="section ">
                        <Outlet />
                    </div>
                </main>
            </div>

        </div>
    )
}
