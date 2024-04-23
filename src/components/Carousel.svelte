<script lang="ts">
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  export let imageURLs: string[];
  export let style: string;
  export let maxElements: number;
  export let size: number;
  export let smallSize: number;
  export let mediumSize: number;

  let position = 0;
  let direction = 0;

  let imageContainer: HTMLElement;

  $: imageContainer?.style.setProperty("--max-elems", `${maxElements}`);
  $: imageContainer?.style.setProperty("--image-size", `${size / 4}rem`);
  $: imageContainer?.style.setProperty(
    "--small-image-size",
    `${smallSize / 4}rem`,
  );
  $: imageContainer?.style.setProperty(
    "--medium-image-size",
    `${mediumSize / 4}rem`,
  );
  const delay = (ms: number) =>
    new Promise((res) => {
      setTimeout(res, ms);
    });

  const images: string[] = [];
  const adjustImages = async () => {
    position = position > 0 ? position : imageURLs.length + position;
    position %= imageURLs.length;
    for (let i = 0; i < maxElements + 2; i++) {
      images[i] = imageURLs[(position + i) % imageURLs.length] ?? "";
    }
  };

  let unique = {};
  function restart() {
    unique = {}; // every {} is unique, {} === {} evaluates to false
  }
  adjustImages();
</script>

<div class="flex space-x-2">
  <button
    on:click={async () => {
      position -= 1;
      direction = -1;
      restart();
      adjustImages();
      await delay(400);
    }}
    class="material-symbols-rounded text-foreground"
  >
    chevron_left
  </button>
  <div
    class="relative flex w-[calc((var(--max-elems)_+_1)_*_(var(--image-size)_+_0.5rem))] justify-center overflow-x-clip sm:w-[calc((var(--max-elems)_+_1)_*_(var(--small-image-size)_+_0.5rem))] md:w-[calc((var(--max-elems)_+_1)_*_(var(--medium-image-size)_+_0.5rem))]"
    bind:this={imageContainer}
  >
    <div
      class="absolute left-0 z-10 h-full w-[calc(var(--image-size)*2/3)] bg-gradient-to-r from-background to-transparent"
    ></div>
    <div
      class="absolute right-0 z-10 h-full w-[calc(var(--image-size)*2/3)] bg-gradient-to-l from-background to-transparent"
    ></div>
    {#key unique}
      <div
        class="flex w-[150%] justify-center space-x-2"
        in:fly={{
          x: `${direction * 3}em`,
          opacity: 1,
          duration: 400,
          easing: cubicOut,
        }}
      >
        {#each images as imageURL}
          <img
            src={imageURL}
            width={`${size * 4}px`}
            sizes={`${size * 4}px, (min-width: 640px) ${smallSize * 4}px, (${mediumSize * 4}px`}
            loading="lazy"
            decoding="async"
            class={`rounded-full ${style} size-[calc(var(--image-size))] sm:size-[calc(var(--small-image-size))] md:size-[calc(var(--medium-image-size))]`}
            alt={imageURL}
          />
        {/each}
      </div>
    {/key}
  </div>
  <button
    on:click={async () => {
      position += 1;
      direction = 1;
      restart();
      adjustImages();
      await delay(400);
    }}
    class="material-symbols-rounded text-foreground"
  >
    chevron_right
  </button>
</div>
