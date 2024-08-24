<script setup lang="ts">
import { defineProps } from "vue";
import { Button } from "~/components/ui/button";
import { useLocalePath, useRoute, onMounted, useI18n } from "#imports";

const props = withDefaults(defineProps<{
  to: string;
  exact: boolean;
  class?: string;
}>(), {
  exact: false,
});
const { to, exact } = props;
const route = useRoute();
const { locale } = useI18n();
const path = computed((): string => {
  const { path: _path } = route;
  if (to === "/")
    return locale.value === "fr" ? _path : _path.replaceAll(locale.value, "");
  return locale.value === "fr" ? _path : _path.replaceAll(`/${locale.value}`, "");
});
const isActive = computed((): boolean => exact ? path.value === to : path.value.startsWith(to));
const localePath = useLocalePath();

onMounted(() => {
  console.log("Path:", path);
});
</script>

<template>
  <Button
    :variant="isActive ? 'secondary' : 'link'"
    :class="props.class"
    as-child
  >
    <NuxtLink :to="localePath(to)">
      <slot />
    </NuxtLink>
  </Button>
</template>
