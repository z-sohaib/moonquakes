import Typewriter from "typewriter-effect"

function Welcome() {
	return (
		<div className="h-screen bg-moon flex justify-center items-center text-center">
			 
			<p className="px-2 py-1 text-[70px] font-aileron text-white"><Typewriter
			options={{
				strings: ["LEARN MORE ABOUT MOONQUAKES"],
				autoStart: true,
				loop: true,
			}}
			/>
			</p>
			<img src="/images/logo.svg" alt="spaceman" className="absolute bottom-8 right-4" />
		</div>
	)
}
export default Welcome