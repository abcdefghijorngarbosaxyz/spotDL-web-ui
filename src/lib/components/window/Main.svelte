<script lang="ts">
  import Footer from './Footer.svelte';
  import Nav from './Nav.svelte';
</script>

<div>
  <Nav />
  <div class=" flex min-h-[calc(100vh_-_64px)] w-full flex-col">
    <main class="mx-auto mb-[120px] mt-6 flex w-[90%] max-w-7xl flex-grow justify-start p-10">
      <slot />
    </main>
    <Footer />
  </div>
</div>
