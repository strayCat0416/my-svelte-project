<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Header from './components/Header.svelte'//Headerコンポーネントのインポート
  import Router from 'svelte-spa-router'
  import { routes } from './router'


	export let name: string;
</script>

<Tailwindcss />
<Header />

<main class="pt-16">
  <div class="container mx-auto px-6 my-4">
		<!-- /*定義したルートを描画するよう定義 -->
		<Router {routes} />
	</div>
</main>
