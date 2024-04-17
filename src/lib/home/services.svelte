<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';

	const services = [
		{
			name: 'Lorem Ipsum',
			summary: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
			faIcon: 'fa-brands fa-dribbble'
		},
		{
			name: 'Sed Perspiciatis',
			summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
			faIcon: 'fa-solid fa-file'
		},
		{
			name: 'Magni Dolores',
			summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
			faIcon: 'fa-solid fa-gauge-simple-high'
		},
		{
			name: 'Nemo Enim',
			summary: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
			faIcon: 'fa-solid fa-layer-group'
		},
		{
			name: 'Dele Cardo',
			summary: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
			faIcon: 'fa-solid fa-sliders'
		},
		{
			name: 'Divera Don',
			summary: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
			faIcon: 'fa-solid fa-archway'
		}
	];
</script>

<Section id="services">
	<Container data-aos="fade-up">
		<SectionHead>
			<SectionTitle>Services</SectionTitle>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionHead>
		<Row>
			{#each services as service, idx}
				{@const marginTop =
					(idx ? 'mt-6' : '') + (idx === 2 ? ' lg:mt-0' : idx === 1 ? ' md:mt-0' : '')}
				<Column
					class="lg:w-1/3 md:w-1/2 flex items-stretch{marginTop ? ` ${marginTop}` : ''}"
					data-aos="zoom-in"
					data-aos-delay={100 + idx * 1}
				>
					<div
						class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white dark:bg-dark-grey-900 shadow-lg shadow-dark-grey-400 dark:shadow-white-smoke/40 hover:ring-2 hover:dark:ring-primary-300 hover:ring-primary-original"
					>
						<div
							class="inline-block size-[72px] bg-primary-400 text-white mx-auto mb-[20px] pt-[17px] text-center rounded-[50%] text-[36px]"
						>
							<i class={service.faIcon}></i>
						</div>
						<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
							<a href={'javascript:;'} class="ease-in-out duration-300 group-hover:text-primary-300"
								>{service.name}</a
							>
						</h4>
						<p class="leading-[24px] text-[14px] mb-0">{service.summary}</p>
					</div>
				</Column>
			{/each}
		</Row>
	</Container>
</Section>
