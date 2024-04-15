<script>
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
			name: 'Portfolio',
			faIcon: 'fa-solid fa-book-open',
			sectionId: 'portfolio'
		},
		{
			name: 'Contact',
			faIcon: 'fa-solid fa-envelope',
			sectionId: 'contact'
		}
	];
</script>

<header
	class="fixed top-0 left-0 bottom-0 z-[9997] transition-all duration-500 p-[15px] overflow-y-auto flex flex-col justify-center"
>
	<nav class="relative block p-0">
		<ul class="m-0 p-0 list-none">
			{#each links as link}
				<li class="relative">
					<a
						href="#{link.sectionId}"
						class="flex items-center py-[10px] px-[18px] mb-[8px] text-[#45505b] hover:text-white bg-[#f2f3f5] hover:bg-[#0563bb] rounded-[50px] h-[56px] overflow-hidden duration-300 group"
						title={link.name}
						><span class="text-[17px] group-hover:mr-3 size-[20px] text-center"
							><i class={link.faIcon}></i></span
						>
						<span class="hidden group-hover:inline-block text-white text-[15px]">{link.name}</span
						></a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
