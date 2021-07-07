<script lang="ts">
  import SearchBar from '../components/SearchBar.svelte'
	let q = 'JavaSript'
</script>

<form>
  <SearchBar bind:value={q} />
</form>

<div class="text-center mt-4">
  { q }
</div>
