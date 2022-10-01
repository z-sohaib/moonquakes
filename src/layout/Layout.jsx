import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function Layout() {
	return (
		<>
			<div className="sky absolute top-0 left-0 h-20 w-20">
				<div className="star"></div>
				<div className="star"></div>
				<div className="star"></div>
				<div className="star"></div>
				<div className="star"></div>
				<div className="star"></div>
				<div className="star"></div>
			</div>
			<div className="h-screen bg-space bg-cover flex">
				<div className="py-8 px-12 w-44 flex h-screen flex-col justify-center items-center self-center gap-y-8">
					<img src="/images/logo.svg" alt="spaceman" />
					<Sidebar />
				</div>
				<div className="w-full h-full overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Layout