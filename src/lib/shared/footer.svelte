<script>
	const socialLinks = [
		{
			faIcon: 'fa-brands fa-facebook',
			name: 'Facebook',
			href: 'https://facebook.com'
		},
		{
			faIcon: 'fa-brands fa-twitter',
			name: 'Twitter',
			href: 'https://twitter.com'
		},
		{
			faIcon: 'fa-brands fa-instagram',
			name: 'Instagram',
			href: 'https://instagram.com'
		},
		{
			faIcon: 'fa-brands fa-skype',
			name: 'Skype',
			href: 'https://skype.com'
		},
		{
			faIcon: 'fa-brands fa-linkedin',
			name: 'Linkedin',
			href: 'https://linkedin.com'
		}
	];
</script>

<footer class="py-[30px] text-center text-[14px] text-[#45505b] bg-[#f7f8f9]">
	<div class="container mx-auto">
		<h3 class="relative p-0 mb-[15px] text-[36px] font-bold">Brandon Johnson</h3>
		<p class="italic p-0 mb-[40px]">
			Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe
			commodi placeat.
		</p>
		<div id="social-links" class="mb-[40px]">
			{#each socialLinks as link}
				<a
					href={link.href}
					id={link.name}
					class="inline-block py-[8px] mr-[4px] size-[36px] text-center rounded-[50%] duration-300 bg-[#0563bb] text-[18px] text-white leading-none"
				>
					<i class={link.faIcon}></i></a
				>
			{/each}
		</div>
		<div id="copyright" class="mb-[5px]">
			&copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
		</div>
		<div id="credits" class="text-[13px]">
			Designed by <a href="https://bootstrapmade.com/" class="text-[#0563bb]">BootstrapMade</a>
		</div>
	</div>
</footer>
