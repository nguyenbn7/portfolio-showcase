<script>
	import Column from '$lib/shared/column.svelte';
	import Container from '$lib/shared/container.svelte';
	import Row from '$lib/shared/row.svelte';
	import SectionHead from '$lib/shared/section-head.svelte';
	import SectionTitle from '$lib/shared/section-title.svelte';
	import Section from '$lib/shared/section.svelte';
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
			</Column>
			<Column class="lg:w-1/2">
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
			</Column>
		</Row>
	</Container>
</Section>
