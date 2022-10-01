import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Post from "./components/Post"
import NotFound from "./components/NotFound"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/post" element={<Post />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<img src="/images/spaceman.svg" alt="spaceman" className="absolute bottom-8 right-4" />
		</div>
	)
}

export default App
