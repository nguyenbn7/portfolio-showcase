<script>
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLElement}
	 */
	let skillSection;

	const skills = [
		{
			name: 'HTML',
			masteryPercentage: 100
		},
		{
			name: 'CSS',
			masteryPercentage: 90
		},
		{
			name: 'JavaScript',
			masteryPercentage: 75
		},
		{
			name: 'PHP',
			masteryPercentage: 80
		},
		{
			name: 'WordPress/CMS',
			masteryPercentage: 90
		},
		{
			name: 'Photoshop',
			masteryPercentage: 55
		}
	];

	const halfwayThrough = Math.floor(skills.length / 2);

	onMount(async () => {
		await import('$lib/waypoint');
		new Waypoint({
			element: skillSection,
			offset: '80%',
			handler: function (direction) {
				/**
				 * @type {NodeListOf<HTMLElement>}
				 */
				let progress = document.querySelectorAll(".progress [role='progressbar']");
				progress.forEach((el) => {
					el.style.width = el.getAttribute('aria-valuenow') + '%';
				});
			}
		});
	});
</script>

<section id="skills" bind:this={skillSection}>
	<div class="container px-3 mx-auto" data-aos="fade-up">
		<div class="section-title">
			<h2>Skills</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row">
			<div class="w-full md:w-1/2 px-3">
				{#each skills.slice(0, halfwayThrough) as skill}
					<div class="progress">
						<span class="skill">{skill.name} <i class="val">{skill.masteryPercentage}%</i></span>
						<div class="bg-[#f2f3f5]">
							<div
								class="w-[1px] h-[10px] duration-1000 bg-gradient-to-r from-blue-100 to-blue-800 max-w-full"
								role="progressbar"
								aria-valuenow={skill.masteryPercentage}
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
					</div>
				{/each}
			</div>

			<div class="w-full md:w-1/2 px-3">
				{#each skills.slice(halfwayThrough) as skill}
					<div class="progress">
						<span class="skill">{skill.name} <i class="val">{skill.masteryPercentage}%</i></span>
						<div class="bg-[#f2f3f5]">
							<div
								class="w-[1px] h-[10px] duration-1000 bg-gradient-to-r from-blue-100 to-blue-800 max-w-full"
								role="progressbar"
								aria-valuenow={skill.masteryPercentage}
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
