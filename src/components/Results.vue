<template>
	<div class="Results">
		<div class="row">
			<div class="col-sm-4" v-for="item in results">
				<div class="card">
					<img class="img-fluid card-img-top" v-bind:src="item.poster_path" alt="">
					<div class="card-body">
						<h4 class="card-title text-center"><router-link :to="{ name: 'details', params: {id: item.id} }">{{ item.title }}</router-link></h4>
						<h5 class="text-center"><span class="badge badge-secondary">{{ item.release_date }}</span></h5>
						<!-- <img class="img-fluid" v-bind:src="item.backdrop_path" alt=""> -->
						<p class="card-text">
						   {{ item.overview }}
						</p>
					</div>
				</div>
			</div>
	    </div><!-- row -->
	</div>
</template>

<script>
	export default {
		name: 'results',
		computed: {
			results() {
				return this.$store.getters.results
			}
		}
	}

</script>

<style scoped>
	.Results .row > div {
		margin-bottom: 30px;
	}
	.Results .card-title {
		cursor: pointer;
		color: blue;
	}
</style>
