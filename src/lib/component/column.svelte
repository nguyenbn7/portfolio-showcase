<script>
	export { classNames as class };
	/**
	 * @type {string | undefined}
	 */
	let classNames = undefined;
</script>

<div
	class={'w-full px-3 flex-shrink-0 flex-grow-0 basis-auto' + (classNames ? ` ${classNames}` : '')}
	{...$$restProps}
>
	<slot></slot>
</div>
