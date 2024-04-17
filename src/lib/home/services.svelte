<script>
	import Column from '$lib/component/column.svelte';
	import Container from '$lib/component/container.svelte';
	import Row from '$lib/component/row.svelte';
	import SectionHead from '$lib/component/section-head.svelte';
	import SectionTitle from '$lib/component/section-title.svelte';
	import Section from '$lib/component/section.svelte';
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
			<Column class="lg:w-1/3 md:w-1/2 flex items-stretch" data-aos="zoom-in" data-aos-delay="100">
				<div
					class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white dark:bg-dark-grey-300 shadow-xl hover:shadow-2xl dark:hover:shadow-primary-300"
				>
					<div
						class="my-0 mx-auto size-[100px] flex items-center justify-center ease-in-out duration-300 relative"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="absolute size-[100] text-[36px] duration-500 fill-slate-50 dark:fill-dark-grey-100 group-hover:fill-primary-200"
							viewBox="0 0 600 600"
						>
							<path
								d="M300 521.002c76.13-3.113 166.073 8.782 210.703-52.972 43.668-60.422-2.667-139.046-19.43-211.687-16.675-72.26-11.335-159.738-75.042-197.699-67.368-40.142-154.293-18.07-222.69 20.292-63.114 35.399-95.238 101.03-116.784 170.11-24.785 79.47-63.053 172.804-10.235 237.147 52.526 63.987 150.762 38.19 233.478 34.809"
							/>
						</svg>
						<i
							class="fa-brands fa-dribbble text-primary-default dark:text-white before:text-[36px] duration-500 relative group-hover:text-white dark:group-hover:text-dark-grey-800"
						></i>
					</div>
					<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
						<a href={'javascript:;'} class="text-[#45505b] dark:text-white ease-in-out duration-300"
							>Lorem Ipsum</a
						>
					</h4>
					<p class="leading-[24px] text-[14px] mb-0">
						Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
					</p>
				</div>
			</Column>
			<Column
				class="lg:w-1/3 md:w-1/2 flex items-stretch mt-6 md:mt-0"
				data-aos="zoom-in"
				data-aos-delay="200"
			>
				<div
					class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white shadow-xl iconbox-blue hover:shadow-2xl"
				>
					<div
						class="my-0 mx-auto size-[100px] flex items-center justify-center ease-in-out duration-300 relative"
					>
						<svg
							class="absolute size-[100] text-[36px] duration-500 fill-[#f5f5f5] group-hover:fill-[#47aeff]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 600 600"
							><path
								d="M300 582.07c82.53 4.77 149.979-56.745 202.585-120.514 54.021-65.484 113.27-147.27 84.088-226.987-27.72-75.725-131.704-70.564-205.176-103.8C312.16 99.402 248.971 18.66 179.868 50.543c-69.326 31.986-60.045 130.295-70.742 205.891-9.038 63.876-16.949 127.628 15.674 183.283 40.034 68.3 96.165 137.784 175.2 142.353"
							/></svg
						>
						<i
							class="fa-solid fa-file text-[#47aeff] before:text-[36px] duration-500 relative group-hover:text-white"
						></i>
					</div>
					<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
						<a href={'javascript:;'} class="text-[#45505b] ease-in-out duration-300"
							>Sed Perspiciatis</a
						>
					</h4>
					<p class="leading-[24px] text-[14px] mb-0">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
					</p>
				</div>
			</Column>
			<Column
				class="lg:w-1/3 md:w-1/2 flex items-stretch mt-6 lg:mt-0"
				data-aos="zoom-in"
				data-aos-delay="300"
			>
				<div
					class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white shadow-xl iconbox-blue hover:shadow-2xl"
				>
					<div
						class="my-0 mx-auto size-[100px] flex items-center justify-center ease-in-out duration-300 relative"
					>
						<svg
							class="absolute size-[100] text-[36px] duration-500 fill-[#f5f5f5] group-hover:fill-[#47aeff]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 600 600"
						>
							<path
								d="M300 541.507c82.15 3.553 179.874 6.838 226.401-60.958 45.12-65.747-8.882-148.477-29.876-225.405-19.153-70.185-22.951-149.531-83.465-189.916-69.785-46.573-161.85-59.89-237.967-24.6C97.871 76.434 51.981 156.157 36.448 239.847c-14.732 79.377 7.327 161.33 60.444 222.127 50.33 57.607 126.683 76.229 203.108 79.534"
							/>
						</svg>
						<i
							class="fa-solid fa-gauge-simple-high text-[#47aeff] before:text-[36px] duration-500 relative group-hover:text-white"
						></i>
					</div>
					<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
						<a href={'javascript:;'} class="text-[#45505b] ease-in-out duration-300"
							>Magni Dolores</a
						>
					</h4>
					<p class="leading-[24px] text-[14px] mb-0">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					</p>
				</div>
			</Column>
			<Column
				class="lg:w-1/3 md:w-1/2 flex items-stretch mt-6"
				data-aos="zoom-in"
				data-aos-delay="400"
			>
				<div
					class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white shadow-xl iconbox-blue hover:shadow-2xl"
				>
					<div
						class="my-0 mx-auto size-[100px] flex items-center justify-center ease-in-out duration-300 relative"
					>
						<svg
							class="absolute size-[100] text-[36px] duration-500 fill-[#f5f5f5] group-hover:fill-[#47aeff]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 600 600"
						>
							<path
								d="M300 503.464c74.799 3.255 164.803 23.71 210.498-35.597 45.43-58.965 2.105-140.293-20.287-211.281-19.113-60.595-42.52-118.466-95.015-154.262C329.306 57.395 248.028 8.28 175.87 42.243 103.414 76.347 93.795 170.98 81.28 250.079c-11.104 70.196-16.434 146.618 30.004 200.416 44.916 52.035 120.04 49.98 188.715 52.969"
							/>
						</svg>
						<i
							class="fa-solid fa-layer-group text-[#47aeff] before:text-[36px] duration-500 relative group-hover:text-white"
						></i>
					</div>
					<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
						<a href={'javascript:;'} class="text-[#45505b] ease-in-out duration-300">Nemo Enim</a>
					</h4>
					<p class="leading-[24px] text-[14px] mb-0">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
					</p>
				</div>
			</Column>
			<Column
				class="lg:w-1/3 md:w-1/2 flex items-stretch mt-6"
				data-aos="zoom-in"
				data-aos-delay="500"
			>
				<div
					class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white shadow-xl iconbox-blue hover:shadow-2xl"
				>
					<div
						class="my-0 mx-auto size-[100px] flex items-center justify-center ease-in-out duration-300 relative"
					>
						<svg
							class="absolute size-[100] text-[36px] duration-500 fill-[#f5f5f5] group-hover:fill-[#47aeff]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 600 600"
						>
							<path
								d="M300 532.354c69.382-.039 129.108-40.724 174.524-93.175 48.365-55.856 94.643-124.858 76.22-196.41-18.077-70.203-94.506-100.147-160.375-130.422-63.708-29.282-131.525-58.829-197.043-33.858-71.714 27.332-130.52 88.71-144.751 164.125-13.732 72.771 28.118 140.828 76.654 196.76 45.502 52.437 105.345 93.02 174.771 92.98"
							/>
						</svg>
						<i
							class="fa-solid fa-sliders text-[#47aeff] before:text-[36px] duration-500 relative group-hover:text-white"
						></i>
					</div>
					<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
						<a href={'javascript:;'} class="text-[#45505b] ease-in-out duration-300">Dele Cardo</a>
					</h4>
					<p class="leading-[24px] text-[14px] mb-0">
						Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur
					</p>
				</div>
			</Column>
			<Column
				class="lg:w-1/3 md:w-1/2 flex items-stretch mt-6"
				data-aos="zoom-in"
				data-aos-delay="600"
			>
				<div
					class="group text-center pt-[70px] pb-[80px] px-[20px] transition-all duration-300 ease-in-out bg-white shadow-xl iconbox-blue hover:shadow-2xl"
				>
					<div
						class="my-0 mx-auto size-[100px] flex items-center justify-center ease-in-out duration-300 relative"
					>
						<svg
							class="absolute size-[100] text-[36px] duration-500 fill-[#f5f5f5] group-hover:fill-[#47aeff]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 600 600"
						>
							<path
								d="M300 566.797c85.738 9.381 178.79-13.904 231.92-81.848 52.691-67.383 50.57-162.274 22.034-242.912-24.798-70.076-88.709-114.372-157.996-141.297-61.74-23.992-126.523-16.118-188.763 6.549-74.275 27.05-165.401 52.714-184.55 129.406-19.326 77.4 50.079 142.549 101.397 203.627C172.929 498.506 224.456 558.532 300 566.797"
							/>
						</svg>
						<i
							class="fa-solid fa-archway text-[#47aeff] before:text-[36px] duration-500 relative group-hover:text-white"
						></i>
					</div>
					<h4 class="font-semibold mt-[10px] mb-[15px] text-[22px]">
						<a href={'javascript:;'} class="text-[#45505b] ease-in-out duration-300">Divera Don</a>
					</h4>
					<p class="leading-[24px] text-[14px] mb-0">
						Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur
					</p>
				</div>
			</Column>
		</Row>
	</Container>
</Section>
