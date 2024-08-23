<script setup lang="ts">
import { defineProps } from "vue";
import { useI18n, useSwitchLocalePath } from "#imports";

const props = defineProps<{
  class?: string;
}>();

const { locale } = useI18n();
const switchLocale = useSwitchLocalePath();
</script>

<template>
  <div :class="props.class">
    <Button
      variant="link"
      as-child
    >
      <NuxtLink
        :to="switchLocale('fr')"
        :class="{ underline: locale === 'fr' }"
      >
        FR
      </NuxtLink>
    </Button>
    <Button
      variant="link"
      as-child
    >
      <NuxtLink
        :to="switchLocale('en')"
        :class="{ underline: locale === 'en' }"
      >
        EN
      </NuxtLink>
    </Button>
  </div>
</template>

<style scoped>

</style>
