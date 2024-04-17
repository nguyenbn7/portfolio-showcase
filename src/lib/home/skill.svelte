<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
	import { onMount } from 'svelte';

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
		const skillEle = document.getElementById('skills');

		await import('$lib/waypoint');

		if (skillEle) {
			new Waypoint({
				element: skillEle,
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
		}
	});
</script>

<Section id="skills">
	<Container data-aos="fade-up">
		<SectionHead>
			<SectionTitle>Skills</SectionTitle>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionHead>

		<Row>
			<Column class="lg:w-1/2">
				{#each skills.slice(0, halfwayThrough) as skill}
					<div class="progress h-[60px] block bg-none rounded-none">
						<span class="py-[10px] m-0 uppercase block font-semibold"
							>{skill.name} <i class="float-right font-normal">{skill.masteryPercentage}%</i></span
						>
						<div class="bg-white-smoke/90 dark:bg-white-smoke/15">
							<div
								class="w-[1px] h-[10px] duration-1000 bg-gradient-to-r from-primary-100 to-primary-500 dark:from-primary-800/80 dark:to-primary-400 max-w-full"
								role="progressbar"
								aria-valuenow={skill.masteryPercentage}
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
					</div>
				{/each}
			</Column>
			<Column class="lg:w-1/2">
				{#each skills.slice(halfwayThrough) as skill}
					<div class="progress h-[60px] block bg-none rounded-none">
						<span class="py-[10px] m-0 uppercase block font-semibold"
							>{skill.name} <i class="float-right font-normal">{skill.masteryPercentage}%</i></span
						>
						<div class="bg-white-smoke/90 dark:bg-white-smoke/15">
							<div
								class="w-[1px] h-[10px] duration-1000 bg-gradient-to-r from-primary-100 to-primary-500 dark:from-primary-800/80 dark:to-primary-400 max-w-full"
								role="progressbar"
								aria-valuenow={skill.masteryPercentage}
								aria-valuemin="0"
								aria-valuemax="100"
							></div>
						</div>
					</div>
				{/each}
			</Column>
		</Row>
	</Container>
</Section>
