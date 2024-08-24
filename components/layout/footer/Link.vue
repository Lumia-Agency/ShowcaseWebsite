<script setup lang="ts">
import { defineProps } from "vue";
import { useLocalePath } from "#imports";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

const props = defineProps<{
  class?: string;
  to: string;
}>();
const localePath = useLocalePath();
</script>

<template>
  <Button
    variant="link"
    as-child
  >
    <NuxtLink
      :to="localePath(to)"
      :class="cn('!justify-start', props.class)"
    >
      <slot />
    </NuxtLink>
  </Button>
</template>

<style scoped>

</style>
