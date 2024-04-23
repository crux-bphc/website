<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { cubicOut } from "svelte/easing";

  let opened = false;
  let path = "";

  const toggle = () => {
    opened = !opened;
  };
  // eslint-disable-next-line no-return-assign
  onMount(() => (path = window.location.pathname));
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  class="material-symbols-rounded font-2xl cursor-pointer select-none font-bold opacity-80"
  on:click={toggle}>menu</span
>
{#if opened}
  <div
    class={`absolute -right-8 top-16 flex w-screen select-none flex-col space-y-4 bg-navbar/80 px-4 py-4 text-right text-xl font-bold text-foreground-muted transition-all duration-300`}
    transition:fade={{
      duration: 400,
      easing: cubicOut,
    }}
  >
    {#if path === "/achievements"}
      <span class="text-purple">Achievements</span>
    {:else}
      <a
        class="text-foreground-muted transition-all duration-200 hover:text-purple hover:underline"
        href="/achievements"
      >
        Achievements
      </a>
    {/if}

    {#if path === "/projects"}
      <span class="text-light-blue">Projects</span>
    {:else}
      <a
        class="text-foreground-muted transition-all duration-200 hover:text-light-blue hover:underline"
        href="/projects"
      >
        Projects
      </a>
    {/if}

    {#if path === "/members"}
      <span class="text-orange">Members & Alumni</span>
    {:else}
      <a
        class="text-foreground-muted transition-all duration-200 hover:text-orange hover:underline"
        href="/members"
      >
        Members & Alumni
      </a>
    {/if}
  </div>
{/if}
