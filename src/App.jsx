import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Post"
import Play from "./components/Play"
import NotFound from "./components/NotFound"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/post" element={<Post />} />
				<Route path="/play" element={<Play />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
