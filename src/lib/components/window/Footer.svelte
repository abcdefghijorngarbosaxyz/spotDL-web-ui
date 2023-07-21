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
