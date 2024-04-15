<script>
	import { socialLinks } from './social';
</script>

<section id="hero" class="relative w-full h-[100vh] md:pl-[160px] flex flex-col justify-center">
	<div class="container mx-auto text-[#45505b]" data-aos="zoom-in" data-aos-delay="100">
		<h1 class="m-0 text-[64px] font-bold leading-[56px]">Brandon Johnson</h1>
		<p class="mt-[15px] text-[26px]">
			I'm <span
				class="typed text-[#0563bb] tracking-[1px]"
				data-typed-items="Designer, Developer, Freelancer, Photographer"
			></span>
		</p>
		<div id="hero-social-links" class="mt-[30px]">
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
