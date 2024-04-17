<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import '@fortawesome/fontawesome-free/css/regular.min.css';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/brands.min.css';
	import BackToTop from '$lib/shared/back-to-top.svelte';
	import Header from '$lib/shared/header.svelte';
	import Footer from '$lib/shared/footer.svelte';
	import { onMount } from 'svelte';
	import Aos from 'aos';
	import ToggleDarkMode from '$lib/shared/toggle-dark-mode.svelte';

	onMount(() => {
		Aos.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
	});
</script>

<div class="fixed z-[997] right-10 top-10">
	<ToggleDarkMode />
</div>
<Header />
<slot />
<BackToTop duration={1100}>
	<i class="fa-solid fa-arrow-up-long"></i>
</BackToTop>
<Footer />
