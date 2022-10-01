import { Link } from "react-router-dom"

function Sidebar() {
	return (
		
		<div className="glass inline-flex flex-col justify-center items-center gap-y-16 py-8 px-4">
			<Link to="/home"><img src="/icons/1.svg" alt="icon 1" /></Link>
			<Link to="/home/about"><img src="/icons/2.svg" alt="icon 2" /></Link>
			<Link to="/home/post"><img src="/icons/3.svg" alt="icon 3" /></Link>
			<Link to="/home/post"><img src="/icons/4.svg" alt="icon 4" /></Link>
			<Link to="/home/info"><img src="/icons/5.svg" alt="icon 5" /></Link>
		</div>
	)
	
}

export default Sidebar