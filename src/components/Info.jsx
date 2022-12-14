/* eslint-disable react/no-unescaped-entities */
function Info() {
	return (
		<div className="mx-auto my-32 w-3/5 rounded-lg">
			<div className="glass text-white py-4 px-8 flex flex-col justify-center items-center">
				<p className="text-[30px] font-semibold mb-8">Does the Moon trigger earthquakes on the Earth?</p>
				<p>   A new analysis of data gathered by the Apollo missions confirms that tidal stress – the gravitational pull of the moon on the Earth and of the Earth on the moon – is responsible for causing deep moonquakes, the lunar equivalent of earthquakes.
Seismometers placed on the moon during the Apollo 12, 14, 15 and 16 missions revealed the moon experiences deep moonquakes about 800 to 1,200 kilometers (497 to 746 miles) below its surface roughly every 27 days. Interestingly, it's a very interesting phenomenon that global transformation by a the Moon's tide stress seems to be a trigger of occurrence for a disastrous earthquake (M&gt;=5.5).<br /><br />
                    It is found out that some statistically considered research papers geared to past earthquakes, there is no one which show about Lunar Age or Lunar Phase Angle clearly.The one of possibility reason is tidal phase angle on the Earth depends on the lunar age. However, many people can not calculate the tidal phase angle.
				</p>
				<img src="/images/figure1.png" alt="figure 1" className="mt-8" />
				<img src="/images/figure2.png" alt="figure 2" className="mt-8" />
				<p className="my-8 text-center">
                Here is a report with an objective of making many people able to imagine at time of high potential of earthquake occurrence intuitively by using visualization of the position of the Moon and the Sun when earthquake was occurred.
				</p>
				<a href="https://github.com/younes-code/the-moon-triggers-earthquakes-on-the-earth" target={"_blank"} className="glass border-white border-2 px-4 py-2 text-white" rel="noreferrer">Read More</a>
			</div>
		</div>
	)
}
export default Info