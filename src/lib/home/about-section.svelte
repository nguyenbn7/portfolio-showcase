<script>
	import Column from '$lib/shared/column.svelte';
	import Container from '$lib/shared/container.svelte';
	import Row from '$lib/shared/row.svelte';
	import SectionHead from '$lib/shared/section-head.svelte';
	import SectionTitle from '$lib/shared/section-title.svelte';
	import Section from '$lib/shared/section.svelte';
</script>

<Section id="about">
	<Container data-aos="fade-up">
		<SectionHead>
			<SectionTitle>About</SectionTitle>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</SectionHead>

		<Row>
			<Column class="lg:w-1/3">
				<img src="/profile-img.jpg" class="max-w-full h-auto" alt="profile" />
			</Column>
			<Column class="lg:w-2/3 pt-4">
				<h3 class="text-[26px] font-bold text-[#728394] leading-tight mb-3">
					UI/UX Designer &amp; Web Developer.
				</h3>
				<p class="italic mb-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<Row>
					<Column class="lg:w-1/2 p-0">
						<ul>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i>
								<strong class="mr-[10px]">Birthday:</strong>
								<span>1 May 1995</span>
							</li>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i>
								<strong class="mr-[10px]">Website:</strong>
								<span>www.example.com</span>
							</li>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i> <strong class="mr-[10px]">Phone:</strong>
								<span>+123 456 7890</span>
							</li>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i> <strong class="mr-[10px]">City:</strong>
								<span>New York, USA</span>
							</li>
						</ul>
					</Column>
					<Column class="lg:w-1/2 p-0">
						<ul>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i> <strong class="mr-[10px]">Age:</strong>
								<span>30</span>
							</li>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i> <strong class="mr-[10px]">Degree:</strong>
								<span>Master</span>
							</li>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i>
								<strong class="mr-[10px]">PhEmailone:</strong>
								<span>email@example.com</span>
							</li>
							<li class="flex items-center mb-[20px]">
								<i
									class="fa-solid fa-chevron-right before:text-[16px] mr-[5px] leading-[0] before:text-[#0563bb]"
								></i>
								<strong class="mr-[10px]">Freelance:</strong>
								<span>Available</span>
							</li>
						</ul>
					</Column>
				</Row>
				<p>
					Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
					adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
					Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
					itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
					culpa magni laudantium dolores.
				</p>
			</Column>
		</Row>
	</Container>
</Section>
