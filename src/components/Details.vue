<template>
	<div class="Details container">
		<div class="row">
			<div class="col-sm-12">
				<div class="alert alert-success">
				  <router-link to="/" class="btn btn-success">Вернуться на главную</router-link>
			    </div>
			</div>
			<div class="col-sm-12" v-for="item in details">
				<div class="card">
					<div class="card-body">
						<div class="embed-responsive embed-responsive-16by9">
						   <iframe class="embed-responsive-item" v-bind:src="item.key" frameborder="0" allowfullscreen></iframe>
					    </div>
				    </div>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'details',
		computed: {
			details() {
				return this.$store.getters.details;
			}
		},
		created() {
			this.$store.dispatch('details',this.$route.params.id)
		}
	}
</script>

<style scoped>
	.Details .alert {
		margin-top: 20px;
	}
</style>