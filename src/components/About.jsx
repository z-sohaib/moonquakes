function About() {
	return (
		<div className=" h-screen left-0 bg-background bg-cover">
			
			<div className="text-white flex flex-col">
				<p className="text-[42px] absolute left-[200px] top-[100px] font-semibold ">Learn about Apollo Missions</p>
			</div>

			<a href="https://moon.nasa.gov/resources/13/apollo-11-seismic-experiment/#:~:text=The%20Passive%20Seismic%20Experiment%20was,Aldrin%20with%20the%20seismic%20experiment." target={"_blank"} rel="noreferrer">
				<div className="text-white ">
					<p className="text-[18px] absolute left-[200px] top-[630px] text-center">Apollo 11 Seismic  <br /> Experiment <br /> 1969</p>
				</div>
				<img src="/images/apollo-11.png" alt="apllo-11" className="absolute left-[340px] top-[630px] w-40" />
			</a>

			<a href="https://www.usgs.gov/publications/results-apollo-12-passive-seismic-experiment" target={"_blank"} rel="noreferrer">
				<div className="text-white ">
					<p className="text-[18px] absolute left-[250px] top-[300px] text-center">Apollo 12 Seismic  <br /> Experiment <br /> 1972</p>
				</div>
				<img src="/images/apollo-12.png" alt="apllo-12" className="absolute left-[400px] top-[300px] w-40" />
			</a>
			

			<a href="https://www.space.com/apollo-13-moon-rocket-impact-experiment-restored-video.html" target={"_blank"} rel="noreferrer">
				<div className="text-white ">
					<p className="text-[18px] absolute left-[550px] top-[570px] text-center">Apollo 13 Seismic  <br /> Experiment <br /> 1976</p>
				</div>
				<img src="/images/apollo-13.png" alt="apllo-13" className="absolute left-[700px] top-[550px] w-40" />
			</a>

			<a href="Apollo 14" target={"_blank"}>
				<div className="text-white ">
					<p className="text-[18px] absolute left-[700px] top-[250px] text-center">Apollo 14 Seismic  <br /> Experiment <br /> 1982</p>
				</div>
				<img src="/images/apollo-14.png" alt="apllo-14" className="absolute left-[850px] top-[250px] w-40" />
			</a>

			<a href="https://www.lpi.usra.edu/lunar/missions/apollo/apollo_14/experiments/pse/" target={"_blank"} rel="noreferrer">
				<div className="text-white ">
					<p className="text-[18px] absolute left-[1000px] top-[450px] text-center">Apollo 15 Seismic  <br /> Experiment <br /> 1986</p>
				</div>
			</a>

			<a href="https://www.lpi.usra.edu/lunar/missions/apollo/apollo_16/experiments/ps/#:~:text=The%20Passive%20Seismic%20Experiment%20detected,at%20the%20Moon's%20internal%20structure." target={"_blank"} rel="noreferrer">
				<div className="text-white ">
					<p className="text-[18px] absolute left-[1200px] top-[280px] text-center">Apollo 16 Seismic  <br /> Experiment <br /> 1972</p>
				</div>
			</a>
		</div>
	)
}

export default About