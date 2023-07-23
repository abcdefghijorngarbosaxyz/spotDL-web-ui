<div class="flex w-full flex-col">
  <div class="h-2 w-full px-2 text-primary/25">
    <svg width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <pattern id="squiggle" width="91" height="8" patternUnits="userSpaceOnUse">
        <g>
          <path
            d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
            stroke="currentColor"
            stroke-linecap="square" />
        </g>
      </pattern>
      <rect width="100%" height="100%" fill="url(#squiggle)" />
    </svg>
  </div>
  <div
    class="mx-0 mb-10 mt-20 block w-[calc(100%_-_80px)] max-w-[1200px] self-center rounded-[32px] bg-base-200">
    <footer class="block align-baseline">
      <section class="flex flex-col border-b border-base-100 p-8">
        <!-- To-do Logo -->
        <div class="h-16 w-40" />
        <p class="max-w-3xl">
          Download your favorite Spotify songs, playlists, artists, and albums, along with metadata
          and album art, from YouTube, if a match is found.
        </p>
        <ul class="text-[#FF8C85]">
          <li>
            <a href="/">GitHub</a>
          </li>
          <li>
            <a href="/">Discord</a>
          </li>
        </ul>
      </section>
      <section class="flex flex-row p-8">
        <ul>
          <li>
            <a href="/">Documentation</a>
          </li>
          <li>
            <a href="/">Report Issue</a>
          </li>
        </ul>
      </section>
    </footer>
  </div>
</div>

<style lang="postcss" scoped>
  p {
    margin-block-end: 1em;
    margin-block-start: 1em;
  }

  ul {
    @apply flex list-none flex-wrap;

    row-gap: 16px;
    column-gap: 24px;
  }

  ul > li {
    @apply inline-block;
  }

  ul > li > a {
    @apply flex w-fit font-semibold hover:text-base-content hover:underline;
  }
</style>
