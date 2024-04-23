<script lang="ts">
  import { Tabs } from "bits-ui";
</script>

<div class="w-full pt-6 lg:w-11/12 xl:w-9/12">
  <Tabs.Root value="members" class="p-3">
    <Tabs.List
      class="flex w-full flex-col justify-end gap-2 rounded-md px-1 text-base font-bold lg:flex-row lg:text-lg"
    >
      <span
        class="w-full pl-1 pr-1 text-2xl font-extrabold text-foreground md:text-4xl lg:pl-3 lg:font-black"
      >
        Members & Alumni</span
      >
      <div
        class="gap flex w-full flex-row justify-end rounded-md text-base font-bold lg:text-lg"
      >
        <Tabs.Trigger
          value="members"
          class="duration-400 mx-1 h-10 w-full rounded-md bg-tab-inactive py-1 text-purple shadow-2xl transition-colors data-[state=active]:bg-orange data-[state=active]:text-orange-foreground lg:w-40 xl:w-48"
          >Members</Tabs.Trigger
        >
        <Tabs.Trigger
          value="alumni"
          class="duration-400 mx-1 h-10 w-full rounded-md bg-tab-inactive py-1 text-purple shadow-2xl transition-colors data-[state=active]:bg-orange data-[state=active]:text-orange-foreground lg:w-40 xl:w-48"
          >Alumni</Tabs.Trigger
        >
      </div>
    </Tabs.List>
    <Tabs.Content value="members" class="pt-1 lg:pt-2">
      <div
        class="grid grid-cols-1 gap-2 p-2 pb-1 lg:grid-cols-3 lg:gap-4 lg:p-4 xl:gap-8"
      >
        <slot name="members" />
      </div>
    </Tabs.Content>
    <Tabs.Content value="alumni" class="pt-1 lg:pt-2">
      <div
        class="grid grid-cols-1 gap-2 p-2 pb-1 lg:grid-cols-3 lg:gap-4 lg:p-4 xl:gap-8"
      >
        <slot name="alumni" />
      </div>
    </Tabs.Content>
  </Tabs.Root>
</div>
