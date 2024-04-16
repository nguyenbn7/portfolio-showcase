<script>
	import About from '$lib/home/about.svelte';
	import Contact from '$lib/home/contact.svelte';
	import Hero from '$lib/home/hero.svelte';
	import Resume from '$lib/home/resume.svelte';
	import Services from '$lib/home/services.svelte';
	import Skill from '$lib/home/skill.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<Hero />
<main>
	<About />
	<Skill />
	<Resume />
	<Services />
	<Contact />
</main>
