import SearchBook from '../pages/SearchBook.svelte'

// /というパスにアクセスした場合に、SearchBookコンポーネントにマッチするように定義します
export const routes = {
  '/': SearchBook,
}
