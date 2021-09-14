<template>
	<Layout>
	<h1>alanjcfs</h1>

	<p>Welcome</p>

	<p>
		I majored in Molecular and Cell Biology and Chemistry, but ultimately
		turned to computer programming.
	</p>

	<ul>
		<li><router-link to="/about">About</router-link></li>
		<li><router-link to="/cochlear-implant">Cochlear Implant, my first major surgery</router-link></li>
	</ul>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Home | alanjcfs.github.io"
	}
}
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>
