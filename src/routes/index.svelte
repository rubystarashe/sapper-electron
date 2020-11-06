<script>
	import successkid from 'images/successkid.jpg';
	import { onMount } from 'svelte';
	onMount(async () => {
		window.electron.ipcRenderer.on('pong', (error, message) => alert(message))
	})

	function handleClick () {
		window.electron.ipcRenderer.send('ping', 'Hello World!')
	}
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>aaTry editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

<button on:click={handleClick}>
	Click me
</button>