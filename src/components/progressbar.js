import React, { useState } from 'react';
import './progress.css';


const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
            
		</div>
        
	)
}

const Main = () => (
	<>
	<div className="mainclass">
        <div className="progressmain">
		<h6>HTML5</h6>
		<Progress data-aos="fade-up" data-aos-anchor=".other-element" done="99"/>

		</div>

        <div className="progressmain">
		<h6>CSS3</h6>
		
		<Progress done="99"/>
        </div>
        <div className="progressmain">
		<h6>Bootstrap4</h6>
		<Progress done="90"/>
		</div>

        <div className="progressmain">
		<h6>jQuery</h6>
		<Progress done="80"/>        
		</div>
        <div className="progressmain">
		<h6>JavaScript</h6>
		<Progress done="90"/>
		</div>

        <div className="progressmain">
		<h6>Reactjs</h6>
		<Progress done="80"/>
        </div>
		<div className="progressmain">
		<h6>Wordpress</h6>
		<Progress done="95"/>
        </div>
		<div className="progressmain">
		<h6>Database</h6>
		<Progress done="90"/>
        </div>
        </div>
	</>
);
export default Main;