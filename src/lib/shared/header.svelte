<script>
	import { onMount } from 'svelte';

	const links = [
		{
			name: 'Home',
			faIcon: 'fa-solid fa-house',
			sectionId: 'hero'
		},
		{
			name: 'About',
			faIcon: 'fa-solid fa-user',
			sectionId: 'about'
		},
		{
			name: 'Resume',
			faIcon: 'fa-solid fa-file',
			sectionId: 'resume'
		},
		{
			name: 'Show Case',
			faIcon: 'fa-solid fa-lightbulb',
			sectionId: 'show-case'
		},
		{
			name: 'Services',
			faIcon: 'fa-solid fa-server',
			sectionId: 'services'
		},
		{
			name: 'Contact',
			faIcon: 'fa-solid fa-envelope',
			sectionId: 'contact'
		}
	];

	/**
	 * @type {string | null}
	 */
	let currentId;

	const sectionIds = links.map((link) => link.sectionId);

	function activateLinkWhenScrollToSection() {
		const section = [...document.getElementsByTagName('section')].find(
			(ele) => ele.getBoundingClientRect().top + 300 > 0
		);
		if (!section) return;

		const sectionId = section.getAttribute('id');
		if (!sectionId || !sectionIds.includes(sectionId)) return;
		currentId = sectionId;
	}

	onMount(activateLinkWhenScrollToSection);
</script>

<svelte:document on:scroll={activateLinkWhenScrollToSection} />

<header
	class="fixed top-0 left-0 bottom-0 z-[9997] transition-all duration-500 p-[15px] overflow-y-auto flex flex-col justify-center"
>
	<nav class="relative block p-0">
		<ul class="m-0 p-0 list-none">
			{#each links as link}
				<li class="relative">
					<a
						href="#{link.sectionId}"
						class="group/item w-[56px] hover:w-full flex items-center py-[10px] px-[18px] mb-[8px] text-river-bed-700 dark:text-white-smoke hover:text-white dark:hover:text-white/85 bg-white-smoke dark:bg-dark-grey-500 hover:bg-primary-original dark:hover:bg-primary-400 rounded-[50px] h-[56px] overflow-hidden duration-300 focus:ring-2 focus:ring-primary-original dark:focus:ring-primary-200 outline-none"
						class:nav-link-active={currentId === link.sectionId}
						><span class="size-[20px] text-[17px] text-center"><i class={link.faIcon}></i></span>
						<span
							class="hidden group-hover/item:block ml-[7px] mr-[5px] text-[15px] whitespace-nowrap"
							>{link.name}</span
						></a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
