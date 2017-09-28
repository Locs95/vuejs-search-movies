<template>
	<div class="Interface">
		<search></search>
		<results></results>
	</div>
</template>

<script>

 import Search from './Search'
 import Results from './Results'

	export default {
		name: 'interface',
		components: {
			Search,
			Results
		}
	}
</script>