import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Countdown extends Component {
	constructor() {
		super()
		this.formatInMinutes = this.formatInMinutes.bind(this)
		this.countdown = this.countdown.bind(this)
		this.twoDigit = this.twoDigit.bind(this)
		this.state = {seconds: 600}
	}

	countdown() {
		if(this.state.seconds > 0)
			this.setState(prevState => ({
				seconds: prevState.seconds - 1
			}))
		else clearInterval(this.interval)
	}

	componentDidMount() {
		this.interval = setInterval(() => this.countdown(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	twoDigit(x) {
		return `00${x}`.slice(-2);
	}

	formatInMinutes(secs) {
		const minutes = this.twoDigit(parseInt(secs / 60));
		const seconds = this.twoDigit(secs % 60);
		return {
			minutes,
			seconds
		}
	}

	render() {
		const { minutes, seconds } = this.formatInMinutes(this.state.seconds);
		return (
				<div>
					<h1>Countdown Begins :- <br/> { minutes }  :  { seconds }</h1>
					<br/>
					{ this.state.seconds !== 0 && <h5>Wait till Countdown Ends to see what happens</h5> }
					{
						this.state.seconds === 0
							&&
						<h3>
							Congratulations Asshole!!<br/>
							U just wasted 10 precious minutes of your life !!<br/>
							Stop fucking around & do something useful in your life rather than waiting !!<br/>
							P.S : If u know me, please ignore this message
						</h3>
					}
				</div>
			)
	}
}

ReactDOM.render(<Countdown />, document.getElementById('app'));
