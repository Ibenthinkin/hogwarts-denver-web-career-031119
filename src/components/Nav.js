import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
				<button onClick={props.sortByName}>Sort By Name</button>
				<button onClick={props.sortByWeight}>Sort By Weight</button>

				<div className="onoffswitch">
						<input onChange={props.filterGreased} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" / >
						<label  className="onoffswitch-label" htmlFor="myonoffswitch">
								<span className="onoffswitch-inner"></span>
								<span className="onoffswitch-switch"></span>
						</label>
				</div>




		</div>
	)
}

export default Nav
