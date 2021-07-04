//App.svelteを生成しているファイル。body要素に対してApp.svelteをマウントしている？
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
