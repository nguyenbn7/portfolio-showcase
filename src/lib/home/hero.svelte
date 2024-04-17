<script>
	import { onMount } from 'svelte';
	import { socialLinks } from './social';
	import Typed from 'typed.js';

	const jobTitleStr = 'Designer, Developer, Freelancer, Photographer';
	/**
	 * @type {HTMLSpanElement}
	 */
	let jobTitlesEl;

	onMount(() => {
		const jobTitles = jobTitleStr.split(',');
		new Typed(jobTitlesEl, {
			strings: jobTitles,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		});
	});
</script>

<section
	id="hero"
	class="relative w-full h-[100vh] md:pl-[160px] flex flex-col justify-center bg-[url('/hero-bg.jpg')] bg-cover before:content-[''] before:bg-white/80 dark:before:bg-dark-grey-original/80 before:absolute before:bottom-0 before:top-0 before:left-0 before:right-0"
>
	<div class="container mx-auto text-river-bed-700" data-aos="zoom-in" data-aos-delay="100">
		<h1 class="m-0 text-[64px] font-bold leading-[56px]">Brandon Johnson</h1>
		<p class="mt-[15px] text-[26px] dark:text-white-smoke/70">
			I'm <span
				class="text-primary-original dark:text-primary-300 tracking-[1px]"
				bind:this={jobTitlesEl}
			></span>
		</p>
		<div id="hero-social-links" class="mt-[30px] dark:text-white-smoke/85">
			{#each socialLinks as link}
				<a
					href={link.href}
					id={link.name}
					class="inline-block mr-[20px] text-center rounded-[50%] duration-300 text-[24px] leading-none"
				>
					<i class={link.faIcon}></i></a
				>
			{/each}
		</div>
	</div>
</section>
