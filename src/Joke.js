import React from 'react'

export default function Joke({ joke }) {
	return (
		<div className="joke">
			<div className="type-id">
				<p className="type">{joke.type}</p>
				<p className="id">{'No.' + joke.id}</p>
			</div>
			<p className="setup">{joke.setup}</p>
			<p className="punchline">{joke.punchline}</p>
		</div>
	)
}
