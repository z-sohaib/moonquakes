import RICIBs from "react-individual-character-input-boxes"

export default function Play() {

	const handleOutput = () => {
		console.log("LOUGANNNIIIII")	
	}

	return (
		<div className=" h-screen left-0 bg-bg bg-cover">
			<div className="text-white flex flex-col">
				<p className="text-[42px] absolute left-[200px] top-[60px] font-semibold ">Play around the moon !</p>
				<p className="text-[28px] absolute left-[200px] top-[110px] ">Try to guess the AI-generated picture, you have limited tempts 🤓</p>
			</div>
			<img className="absolute left-[600px] top-[200px] w-[300px] h-[300px] rounded-[20px]" src="/images/game.png" alt="image" />

			<div className="absolute left-[475px] top-[550px]">
				<RICIBs
					amount={10}
					handleOutputString={handleOutput}
					inputRegExp={/^[a-zA-Z0-9_.-]*$/}
				/>
			</div>
			<button className="text-white" type="submit">SUBMIT</button>
		</div>
	) 
}