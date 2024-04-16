<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
</script>

<Section id="contact" data-aos="fade-up">
	<Container>
		<SectionHead>
			<SectionTitle>Contact</SectionTitle>
		</SectionHead>
		<Row class="mt-1">
			<Column class="lg:w-1/3">
				<div class="w-full bg-white">
					<div class="group">
						<i
							class="fa-solid fa-location-dot before:text-[20px] text-[#0563bb] float-left size-[44px] bg-[#eef7ff] before:flex before:items-center before:justify-center before:h-full rounded-[50px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#0563bb]"
						></i>
						<h4 class="pl-[60px] text-[22px] font-semibold mb-[5px] text-[#45505b]">Location:</h4>
						<p class="pl-[60px] mb-0 text-[14px] text-[#728394]">
							A108 Adam Street, New York, NY 535022
						</p>
					</div>

					<div class="group mt-[40px]">
						<i
							class="fa-solid fa-envelope before:text-[20px] text-[#0563bb] float-left size-[44px] bg-[#eef7ff] before:flex before:items-center before:justify-center before:h-full rounded-[50px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#0563bb]"
						></i>
						<h4 class="pl-[60px] text-[22px] font-semibold mb-[5px] text-[#45505b]">Email:</h4>
						<p class="pl-[60px] mb-0 text-[14px] text-[#728394]">info@example.com</p>
					</div>

					<div class="group mt-[40px]">
						<i
							class="fa-solid fa-phone before:text-[20px] text-[#0563bb] float-left size-[44px] bg-[#eef7ff] before:flex before:items-center before:justify-center before:h-full rounded-[50px] transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#0563bb]"
						></i>
						<h4 class="pl-[60px] text-[22px] font-semibold mb-[5px] text-[#45505b]">Call:</h4>
						<p class="pl-[60px] mb-0 text-[14px] text-[#728394]">+1 5589 55488 55s</p>
					</div>
				</div>
			</Column>
			<Column class="lg:w-2/3 mt-12 lg:mt-0">
				<form action="#" method="post" class="w-full bg-white">
					<Row>
						<Column class="md:w-1/2 pb-[8px] !px-0 md:!pr-3">
							<input
								type="text"
								name="name"
								class="block w-full py-[.375rem] px-3 font-normal leading-normal border-[2px] border-[#dee2e6] focus:border-[#86b7fe] outline-none rounded-[4px] h-[44px] text-[14px] text-[#212529] appearance-none"
								id="name"
								placeholder="Your Name"
								required
							/>
						</Column>
						<Column class="md:w-1/2 mt-4 md:mt-0 pb-[8px] !px-0 md:!pl-3">
							<input
								type="email"
								class="block w-full py-[.375rem] px-3 font-normal leading-normal border-[2px] border-[#dee2e6] focus:border-[#86b7fe] outline-none rounded-[4px] h-[44px] text-[14px] text-[#212529] appearance-none"
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
							class="block w-full py-[.375rem] px-3 font-normal leading-normal border-[2px] border-[#dee2e6] focus:border-[#86b7fe] outline-none rounded-[4px] h-[44px] text-[14px] text-[#212529] appearance-none"
							name="subject"
							id="subject"
							placeholder="Subject"
							required
						/>
					</div>
					<div class="pb-[8px] mt-3">
						<textarea
							class="block w-full py-[10px] px-[12px] font-normal leading-normal border-[2px] border-[#dee2e6] focus:border-[#86b7fe] outline-none rounded-[4px] text-[14px] text-[#212529] appearance-none"
							name="message"
							rows="5"
							placeholder="Message"
							required
						></textarea>
					</div>
					<div class="text-center mt-4">
						<button
							type="submit"
							class="bg-[#0563bb] py-[10px] px-[35px] text-white duration-[400ms] rounded-[50px] hover:bg-[#0678e3]"
							>Send Message</button
						>
					</div>
				</form>
			</Column>
		</Row>
	</Container>
</Section>
