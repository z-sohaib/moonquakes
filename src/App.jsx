import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Play from "./components/Play"
import NotFound from "./components/NotFound"
import Welcome from "./components/Welcome"
import Layout from "./layout/Layout"
import Info from "./components/Info"
import Details from "./components/Details"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Welcome />} />
			<Route path="/home" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="play" element={<Play />} />
				<Route path="details" element={<Details />} />
				<Route path="info" element={<Info />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
		
	)
}

export default App
