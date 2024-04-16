<script>
	import '$lib/tns.css';
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
	import { onMount } from 'svelte';

	const clients = [
		{
			name: 'Saul Goodman',
			jobTitle: 'Ceo &amp; Founder',
			comment:
				'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
		},
		{
			name: 'Sara Wilsson',
			jobTitle: 'Designer',
			comment:
				'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
		},
		{
			name: 'Jena Karlis',
			jobTitle: 'Store Owner',
			comment:
				'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
		},
		{
			name: 'Matt Brandon',
			jobTitle: 'Freelancer',
			comment:
				'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
		},
		{
			name: 'John Larson',
			jobTitle: 'Entrepreneur',
			comment:
				'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
		}
	];

	onMount(async () => {
		const { tns } = await import('tiny-slider');
		tns({
			container: '.testimonials-slider',
			speed: 500,
			items: 1,
			loop: true,
			autoplay: true,
			animateDelay: 5000,
			autoplayButtonOutput: false,
			controls: false
		});
	});
</script>

<Section id="testimonials">
	<Container data-aos="fade-up">
		<SectionHead>
			<SectionTitle>Testimonials</SectionTitle>
		</SectionHead>
		<Row class="flex-nowrap testimonials-slider" data-aos="fade-up" data-aos-delay="100">
			{#each clients as client, idx}
				<Column class="text-center">
					<img
						src="/testimonials/testimonials-{idx + 1}.jpg"
						class="w-[120px] rounded-[50%] border-[4px] border-solid border-white mx-auto"
						alt={client.name}
					/>
					<h3 class="text-[20px] font-bold mt-[10px] mb-[5px] text-[#111]">{client.name}</h3>
					<h4 class="text-[14px] text-[#999] ml-[15px]">{@html client.jobTitle}</h4>
					<p class="italic mx-auto mb-[15px] lg:w-[80%]">
						<i
							class="fa-solid fa-quote-left before:text-[26px] before:text-[#90c8fc] inline-block -left-[5px] relative"
						></i>
						{client.comment}
						<i
							class="fa-solid fa-quote-right before:text-[26px] before:text-[#90c8fc] inline-block -right-[5px] relative top-[10px]"
						></i>
					</p>
				</Column>
			{/each}
		</Row>
	</Container>
</Section>
