<script>
	import AboutSection from '$lib/home/about-section.svelte';
	import HeroSection from '$lib/home/hero-section.svelte';
	import ResumeSection from '$lib/home/resume-section.svelte';
	import SkillSection from '$lib/home/skill-section.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<HeroSection />
<main>
	<AboutSection />
	<SkillSection />
	<ResumeSection />
</main>
