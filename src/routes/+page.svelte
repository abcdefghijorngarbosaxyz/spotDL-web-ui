<script>
  import Section from '$lib/components/shared/Section.svelte';
</script>

<div class="w-full">
  <header class="w-full items-center justify-center rounded-[64px] bg-accent px-16 py-24">
    <div class="flex flex-col justify-center">
      <h1 class="flex w-full flex-col items-center text-[112px]">spotDL Web Client</h1>
      <center class="mb-6 w-full px-8 text-center text-2xl">
        Download your favorite Spotify songs, playlists, artists, and albums, along with metadata
        and album art, from YouTube, if a match is found.
      </center>
      <center class="flex flex-col items-center">
        <button
          class="h-[80px] w-fit rounded-[48px] bg-primary px-[48px] text-2xl text-primary-content transition-[border-radius] duration-200 focus:rounded-3xl focus:outline-none">
          Search / Ctrl + F
        </button>
      </center>
    </div>
  </header>
  <Section title="Browse Categories" />
</div>
