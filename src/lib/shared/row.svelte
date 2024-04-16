<script>
	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<div class={'w-full flex flex-wrap mt-0' + (classNames ? ` ${classNames}` : '')}>
	<slot></slot>
</div>
