<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';

	const projects = [
		{
			name: 'App 1',
			summary: 'App',
			imageName: 'portfolio-1.jpg',
			link: 'javascript:;',
			type: 'app'
		},
		{
			name: 'Web 3',
			summary: 'Web',
			imageName: 'portfolio-2.jpg',
			link: 'javascript:;',
			type: 'web'
		},
		{
			name: 'App 2',
			summary: 'App',
			imageName: 'portfolio-3.jpg',
			link: 'javascript:;',
			type: 'app'
		},
		{
			name: 'Card 2',
			summary: 'Card',
			imageName: 'portfolio-4.jpg',
			link: 'javascript:;',
			type: 'card'
		},
		{
			name: 'Web 2',
			summary: 'Web',
			imageName: 'portfolio-5.jpg',
			link: 'javascript:;',
			type: 'web'
		},
		{
			name: 'App 3',
			summary: 'App',
			imageName: 'portfolio-6.jpg',
			link: 'javascript:;',
			type: 'app'
		},
		{
			name: 'Card 1',
			summary: 'Card',
			imageName: 'portfolio-7.jpg',
			link: 'javascript:;',
			type: 'card'
		},
		{
			name: 'Card 3',
			summary: 'Card',
			imageName: 'portfolio-8.jpg',
			link: 'javascript:;',
			type: 'card'
		},
		{
			name: 'Web 3',
			summary: 'Web',
			imageName: 'portfolio-9.jpg',
			link: 'javascript:;',
			type: 'web'
		}
	];
</script>

<Section id="show-case">
	<Container data-aos="fade-up">
		<SectionHead>
			<SectionTitle>Show case</SectionTitle>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionHead>
		<Row>
			<Column data-aos="fade-up" data-aos-delay="100">
				<ul class="mx-auto mb-[25px] text-center rounded-[50px] py-[2px] px-[15px]">
					<li
						class="cursor-pointer inline-block py-[10px] px-[15px] text-[14px] font-semibold leading-none uppercase mb-[5px] transition-all duration-300 ease-in-out hover:text-primary-original filter-active"
						data-filter="*"
					>
						All
					</li>
					<li
						class="cursor-pointer inline-block py-[10px] px-[15px] text-[14px] font-semibold leading-none uppercase mb-[5px] transition-all duration-300 ease-in-out hover:text-primary-original"
						data-filter=".filter-app"
					>
						App
					</li>
					<li
						class="cursor-pointer inline-block py-[10px] px-[15px] text-[14px] font-semibold leading-none uppercase mb-[5px] transition-all duration-300 ease-in-out hover:text-primary-original"
						data-filter=".filter-card"
					>
						Card
					</li>
					<li
						class="cursor-pointer inline-block py-[10px] px-[15px] text-[14px] font-semibold leading-none uppercase mb-[5px] transition-all duration-300 ease-in-out hover:text-primary-original"
						data-filter=".filter-web"
					>
						Web
					</li>
				</ul>
			</Column>
		</Row>

		<Row data-aos="fade-up" data-aos-delay="200">
			{#each projects as project}
				<!-- content here -->
				<Column class="md:w-1/2 lg:w-1/3 filter-{project.type}">
					<div class="portfolio-wrap">
						<img src="/portfolio/{project.imageName}" alt={project.name} />
						<div class="portfolio-info">
							<h4 class="text-[20px] !font-semibold">{project.name}</h4>
							<p class="text-[14px] uppercase">{project.summary}</p>
							<a
								href={project.link}
								class="text-[28px] inline-block duration-300 mb-[2px] hover:text-primary-400"
								title="View portfolio"
							>
								<i class="fa-solid fa-link"></i>
							</a>
						</div>
					</div>
				</Column>
			{/each}
		</Row>
	</Container>
</Section>
