import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        coral: {
          primary: '#FFB3AE',
          'primary-content': '#601314',
          secondary: '#E7BDB9',
          accent: '#552631',
          'base-100': '#1E1414',
          'base-200': '#2B1C1F',
          'base-300': '#462D37',
          'base-content': '#EBDCDC'
        }
      }
    ]
  }
} satisfies Config;
