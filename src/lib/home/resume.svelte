<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import ResumeInfoContainer from '$lib/component/resume-info-container.svelte';
	import ResumeInfoHeader from '$lib/component/resume-info-header.svelte';
	import ResumeInfoSubHeader from '$lib/component/resume-info-sub-header.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
</script>

<Section id="resume">
	<Container data-aos="fade-up">
		<SectionHead>
			<SectionTitle>Resume</SectionTitle>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionHead>
		<Row>
			<Column class="lg:w-1/2">
				<h3 class="text-[26px] my-[20px]">Sumary</h3>
				<ResumeInfoContainer>
					<ResumeInfoHeader>Brandon Johnson</ResumeInfoHeader>
					<p>
						<em
							>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing
							and developing user-centered digital/print marketing material from initial concept to
							final, polished deliverable.</em
						>
					</p>
					<ul class="pl-[20px] list-disc">
						<li class="pb-[10px] last:pb-0">Portland par 127,Orlando, FL</li>
						<li class="pb-[10px] last:pb-0">(123) 456-7891</li>
						<li class="pb-[10px] last:pb-0">alice.barkley@example.com</li>
					</ul>
				</ResumeInfoContainer>

				<h3 class="text-[26px] my-[20px]">Education</h3>
				<ResumeInfoContainer>
					<ResumeInfoHeader>Master of Fine Arts &amp; Graphic Design</ResumeInfoHeader>
					<ResumeInfoSubHeader>2015 - 2016</ResumeInfoSubHeader>
					<p class="italic">Rochester Institute of Technology, Rochester, NY</p>
					<p>
						Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero
						voluptatum qui ut dignissimos deleniti nerada porti sand markend
					</p>
				</ResumeInfoContainer>

				<ResumeInfoContainer>
					<ResumeInfoHeader>Bachelor of Fine Arts &amp; Graphic Design</ResumeInfoHeader>
					<ResumeInfoSubHeader>2010 - 2014</ResumeInfoSubHeader>
					<p class="italic">Rochester Institute of Technology, Rochester, NY</p>
					<p>
						Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius
						vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae
						consequatur neque etlon sader mart dila
					</p>
				</ResumeInfoContainer>
			</Column>
			<Column class="lg:w-1/2">
				<h3 class="text-[26px] my-[20px]">Professional Experience</h3>
				<ResumeInfoContainer>
					<ResumeInfoHeader>Senior graphic design specialist</ResumeInfoHeader>
					<ResumeInfoSubHeader>2019 - Present</ResumeInfoSubHeader>
					<p class="italic">Experion, New York, NY</p>
					<ul class="pl-[20px] list-disc">
						<li class="pb-[10px] last:pb-0">
							Lead in the design, development, and implementation of the graphic, layout, and
							production communication materials
						</li>
						<li class="pb-[10px] last:pb-0">
							Delegate tasks to the 7 members of the design team and provide counsel on all aspects
							of the project.
						</li>
						<li class="pb-[10px] last:pb-0">
							Supervise the assessment of all graphic materials in order to ensure quality and
							accuracy of the design
						</li>
						<li class="pb-[10px] last:pb-0">
							Oversee the efficient use of production project budgets ranging from $2,000 - $25,000
						</li>
					</ul>
				</ResumeInfoContainer>

				<ResumeInfoContainer>
					<ResumeInfoHeader>Graphic design specialist</ResumeInfoHeader>
					<ResumeInfoSubHeader>2017 - 2018</ResumeInfoSubHeader>
					<p class="italic">Stepping Stone Advertising, New York, NY</p>
					<ul class="pl-[20px] list-disc">
						<li class="pb-[10px] last:pb-0">
							Developed numerous marketing programs (logos, brochures,infographics, presentations,
							and advertisements).
						</li>
						<li class="pb-[10px] last:pb-0">
							Managed up to 5 projects or tasks at a given time while under pressure
						</li>
						<li class="pb-[10px] last:pb-0">
							Recommended and consulted with clients on the most appropriate graphic design
						</li>
						<li class="pb-[10px] last:pb-0">
							Created 4+ design presentations and proposals a month for clients and account managers
						</li>
					</ul>
				</ResumeInfoContainer>
			</Column>
		</Row>
	</Container>
</Section>
