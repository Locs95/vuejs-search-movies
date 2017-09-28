<template>
	<div class="Search">
		<div class="form-group">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="искать фильмы" v-model="query" v-on:keyup.enter="search()">
				<div class="input-group-btn">
					<button class="btn btn-success text-uppercase" v-on:click="search()">поиск</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
				query: ''
			}
		},
		methods: {
				search() {
					this.$store.dispatch('search',this.query);
				}
		}
	}

</script>

<style scoped>
	.Search {
		margin-top: 30px;
	}
</style>

