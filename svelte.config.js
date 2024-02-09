import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      prependData: "@import './src/theme/app.scss';"
    }
  }),
  prerender: false,

  kit: {
    adapter: adapter({precompress: true})
  },
  vite: {
    // plugins: []
  }
};

export default config;
