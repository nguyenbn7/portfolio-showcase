<script>
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLDivElement}
	 */
	let ele;
	let hidden = true;

	/**
	 * @param {'dark' | 'light' | 'system'} option
	 */
	function toggleDarkMode(option) {
		if (option === 'light' && document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			return;
		}

		if (option === 'dark' && !document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			return;
		}

		if (option === 'system') {
			localStorage.removeItem('theme');
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			}
			return;
		}
	}

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & Window; }} $event
	 */
	function hideList($event) {
		// @ts-ignore
		if (!ele.contains($event.target)) hidden = true;
	}
</script>

<svelte:window on:click={hideList} />

<div class="relative" bind:this={ele}>
	<button
		class="size-[42px] text-[20px] flex items-center justify-center bg-primary-original text-white-smoke hover:bg-primary-400 active:bg-primary-900 rounded-[10px] p-[18px] outline-none"
		title="Dark Mode"
		on:click={() => (hidden = !hidden)}
	>
		<i class="fa-solid fa-moon"></i>
	</button>
	<ul
		class="absolute right-0 bg-white dark:bg-dark-grey-500 text-base float-left py-1 list-none text-left rounded shadow-lg mt-1 min-w-32 cursor-pointer"
		class:hidden
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<li
			class="px-4 py-2 text-sm hover:bg-primary-400 active:bg-primary-600"
			on:click|stopPropagation={() => toggleDarkMode('light')}
		>
			<i class="fa-regular fa-sun mr-3"></i> Light
		</li>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<li
			class="pl-5 px-4 py-2 text-sm hover:bg-primary-400 active:bg-primary-600"
			on:click|stopPropagation={() => toggleDarkMode('dark')}
		>
			<i class="fa-regular fa-moon mr-3"></i> Dark
		</li>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<li
			class="px-4 py-2 text-sm hover:bg-primary-400 active:bg-primary-600"
			on:click|stopPropagation={() => toggleDarkMode('system')}
		>
			<i class="fa-solid fa-desktop mr-3"></i> System
		</li>
	</ul>
</div>
