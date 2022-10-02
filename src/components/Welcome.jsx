import { useEffect } from "react"
import Typewriter from "typewriter-effect"
import { useNavigate } from "react-router-dom"

function Welcome() {
	const navigate = useNavigate();
	useEffect(()=>{const myTimeout = setTimeout(switchpage, 6000);})
	const switchpage = ()=>{
		console.log("hhelll")
		  navigate("/home");
	}

	
	return (
		<div className="h-screen bg-mn flex justify-center items-center text-center"> 
			<p className="px-2 py-1 text-[70px] font-aileron drop-shadow-2xl text-white"><Typewriter
				options={{
					strings: ["LEARN MORE ABOUT MOONQUAKES"],
					autoStart: true,
					loop: true,
				}}
			/>
			</p>
			<img src="/images/logo.svg" alt="spaceman" className="absolute bottom-0 right-0" />
		</div>
		
	)
}
export default Welcome