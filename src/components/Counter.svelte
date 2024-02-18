<script lang="ts">
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment} class="text-foreground">
  count is {count}
</button>
