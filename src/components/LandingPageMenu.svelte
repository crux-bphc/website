<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  let opened = false;

  const toggle = () => {
    opened = !opened;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  class="material-symbols-rounded font-2xl cursor-pointer select-none font-bold opacity-80"
  on:click={toggle}>menu</span
>
{#if opened}
  <div
    class={`absolute -right-8 ${window.scrollY > 128 ? "top-16" : "-top-36"} flex w-screen select-none flex-col space-y-4 bg-navbar/80 px-4 py-4 text-right text-xl font-bold text-foreground-muted transition-all duration-300`}
    transition:fade={{
      duration: 400,
      easing: cubicOut,
    }}
  >
    <a
      class="text-foreground-muted transition-all duration-200 hover:text-purple hover:underline"
      href="/achievements"
    >
      Achievements
    </a>
    <a
      class="text-foreground-muted transition-all duration-200 hover:text-light-blue hover:underline"
      href="/projects"
    >
      Projects
    </a>
    <a
      class="text-foreground-muted transition-all duration-200 hover:text-orange hover:underline"
      href="/members"
    >
      Members & Alumni
    </a>
  </div>
{/if}
