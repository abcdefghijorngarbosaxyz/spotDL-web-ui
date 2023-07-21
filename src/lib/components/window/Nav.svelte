<script lang="ts">
  import { useWindowEvent } from '$lib/utils/use-window-event';
  import { onMount } from 'svelte';

  let scrollAmount = 0;

  onMount(() =>
    useWindowEvent('scroll', (_event) => {
      scrollAmount = window.scrollY;
    })
  );

  let input: HTMLInputElement;

  const onMenuClick = () => {
    input.checked = !input.checked;
  };
</script>

<nav
  class={`fixed top-0 z-[999] -order-1 inline-flex h-16 w-full justify-start px-3 py-2 transition-colors duration-200 ease-in ${
    scrollAmount > 0 && 'bg-base-300'
  }`}>
  <button on:click={onMenuClick} class="h-12 w-12 rounded-full p-3">
    <label class="swap">
      <input bind:this={input} type="checkbox" />
      <i class="material-symbol swap-off">menu</i>
      <i class="material-symbol swap-on">menu_open</i>
    </label>
  </button>
</nav>
