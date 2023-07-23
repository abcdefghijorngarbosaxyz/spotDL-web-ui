<script lang="ts">
  export let title: string;
</script>

<section class="w-full px-0 py-14">
  <div class="m-6 w-full">
    <h2 class="mb-2 text-[57px]">{title}</h2>
  </div>
  <div class="w-full">
    <slot />
  </div>
</section>
