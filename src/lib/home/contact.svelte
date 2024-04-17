<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';

	// TODO: handle form and submission
</script>

<Section id="contact" data-aos="fade-up">
	<Container>
		<SectionHead>
			<SectionTitle>Contact</SectionTitle>
		</SectionHead>
		<Row class="mt-1">
			<Column class="lg:w-1/3">
				<div class="w-full">
					<div class="group">
						<i
							class="fa-solid fa-location-dot before:text-[20px] text-primary-original float-left size-[44px] bg-primary-50 dark:bg-primary-100 before:flex before:items-center before:justify-center before:h-full rounded-[50px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-primary-original"
						></i>
						<h4 class="pl-[60px] text-[22px] font-semibold mb-[5px]">Location:</h4>
						<p class="pl-[60px] mb-0 text-[14px]">A108 Adam Street, New York, NY 535022</p>
					</div>

					<div class="group mt-[40px]">
						<i
							class="fa-solid fa-envelope before:text-[20px] text-primary-original float-left size-[44px] bg-primary-50 dark:bg-primary-100 before:flex before:items-center before:justify-center before:h-full rounded-[50px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-primary-original"
						></i>
						<h4 class="pl-[60px] text-[22px] font-semibold mb-[5px]">Email:</h4>
						<p class="pl-[60px] mb-0 text-[14px]">info@example.com</p>
					</div>

					<div class="group mt-[40px]">
						<i
							class="fa-solid fa-phone before:text-[20px] text-primary-original float-left size-[44px] bg-primary-50 dark:bg-primary-100 before:flex before:items-center before:justify-center before:h-full rounded-[50px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-primary-original"
						></i>
						<h4 class="pl-[60px] text-[22px] font-semibold mb-[5px]">Call:</h4>
						<p class="pl-[60px] mb-0 text-[14px]">+1 5589 55488 55s</p>
					</div>
				</div>
			</Column>
			<Column class="lg:w-2/3 mt-12 lg:mt-0">
				<form action="#" method="post" class="w-full">
					<Row>
						<Column class="md:w-1/2 pb-[8px] !px-0 md:!pr-3">
							<input
								type="text"
								name="name"
								class="block w-full py-[.375rem] px-3 font-normal leading-normal border-[2px] border-dark-grey-600/25 focus:border-primary-300 outline-none rounded-[4px] h-[44px] text-[14px] appearance-none dark:bg-dark-grey-600/90 dark:border-primary-50/45"
								id="name"
								placeholder="Your Name"
								required
							/>
						</Column>
						<Column class="md:w-1/2 mt-4 md:mt-0 pb-[8px] !px-0 md:!pl-3">
							<input
								type="email"
								class="block w-full py-[.375rem] px-3 font-normal leading-normal border-[2px] border-dark-grey-600/25 focus:border-primary-300 outline-none rounded-[4px] h-[44px] text-[14px] appearance-none dark:bg-dark-grey-600/90 dark:border-primary-50/45"
								name="email"
								id="email"
								placeholder="Your Email"
								required
							/>
						</Column>
					</Row>
					<div class="pb-[8px] mt-3">
						<input
							type="text"
							class="block w-full py-[.375rem] px-3 font-normal leading-normal border-[2px] border-dark-grey-600/25 focus:border-primary-300 outline-none rounded-[4px] h-[44px] text-[14px] appearance-none dark:bg-dark-grey-600/90 dark:border-primary-50/45"
							name="subject"
							id="subject"
							placeholder="Subject"
							required
						/>
					</div>
					<div class="pb-[8px] mt-3">
						<textarea
							class="block w-full py-[10px] px-[12px] font-normal leading-normal border-[2px] border-dark-grey-600/25 focus:border-primary-300 outline-none rounded-[4px] text-[14px] appearance-none dark:bg-dark-grey-600/90 dark:border-primary-50/45"
							name="message"
							rows="5"
							placeholder="Message"
							required
						></textarea>
					</div>
					<div class="text-center mt-4">
						<button
							type="submit"
							class="bg-primary-original py-[10px] px-[35px] text-white duration-[400ms] rounded-[50px] hover:bg-primary-800 dark:bg-primary-400 hover:dark:bg-primary-600"
							>Send Message</button
						>
					</div>
				</form>
			</Column>
		</Row>
	</Container>
</Section>
