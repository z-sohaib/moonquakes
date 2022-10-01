import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function Layout() {
	return (
		<div className="h-screen bg-space bg-cover flex">
			<div className="py-12 px-12 w-44 flex h-full flex-col justify-center items-center self-center">
				<Sidebar />
			</div>
			<div className="w-full h-full overflow-y-auto">
				<Outlet />
			</div>

		</div>
	)
}

export default Layout