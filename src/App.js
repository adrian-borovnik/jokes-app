import { useEffect, useState } from 'react'
import './App.css'
import Joke from './Joke'

function App() {
	const JOKE_API_URL =
		'https://official-joke-api.appspot.com/random_joke'
	const [joke, setJoke] = useState({})
	const [loading, setLoading] = useState(true)

	async function getData() {
		if (loading) return
		setLoading(true)
		const response = await fetch(JOKE_API_URL)
		const data = await response.json()
		setJoke(data)
	}

	useEffect(() => getData(), [])
	useEffect(() => {
		setLoading(false)
	}, [joke])

	return (
		<>
			<div className='container'>
				<div className='title'>
					<h1>JokesAPI</h1>
					<button onClick={getData}>New joke</button>
				</div>

				{loading && <p className='loading'>Loading...</p>}
				{!loading && <Joke joke={joke} />}
			</div>
		</>
	)
}

export default App
