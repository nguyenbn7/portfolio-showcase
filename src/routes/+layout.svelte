<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import '@fortawesome/fontawesome-free/css/regular.min.css';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/brands.min.css';
	import BackToTop from '$lib/shared/back-to-top.svelte';
	import Header from '$lib/shared/header.svelte';
	import Footer from '$lib/shared/footer.svelte';
</script>

<Header />
<slot />
<BackToTop>
	<i class="fa-solid fa-arrow-up-long"></i>
</BackToTop>
<Footer />
