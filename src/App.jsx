import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Post"
import NotFound from "./components/NotFound"
import Welcome from "./components/Welcome"
import Sidebar from "./components/Sidebar"

function App() {
	return (
		<div className="h-screen bg-space bg-cover flex">
			<div className="py-12 px-12 w-44 flex h-full flex-col justify-center items-center self-center">
				<Sidebar />
			</div>
			<div className="w-full h-full overflow-y-auto">
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/post" element={<Post />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
