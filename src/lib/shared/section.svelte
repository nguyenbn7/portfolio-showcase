<script>
	/**
	 * @type {string | null}
	 */
	export let id = null;

	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<section
	{id}
	class={'p-[60px] overflow-hidden' + (classNames ? ` ${classNames}` : '')}
	{...$$restProps}
>
	<slot></slot>
</section>
