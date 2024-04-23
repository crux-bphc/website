<script lang="ts">
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
<div
  class={`absolute -right-8 ${window.scrollY > 128 ? "top-16" : "-top-36"} flex w-screen select-none flex-col space-y-4 bg-navbar/80 px-4 py-4 text-right text-xl font-bold text-foreground-muted transition-all duration-300 ${opened ? "opacity-100" : "opacity-0"}`}
>
  <span>Achievements</span>
  <span>Projects</span>
  <span>Members & Alumni</span>
</div>
