<script setup lang="ts">
import { defineProps } from "vue";
import { MobileNavigation, DesktopNavigation } from "~/components/layout/navigation";
import { LanguageSelector } from "~/components/layout/language";
import { cn } from "~/lib/utils";
import { useLocalePath } from "#imports";

const props = defineProps<{
  class?: string;
}>();
const localePath = useLocalePath();
</script>

<template>
  <header
    :class="
      cn('w-navWrapper md:w-respNavWrapper z-50 isolate flex px-6 py-4 justify-between items-center bg-white shadow-header md:mt-8 md:rounded-2xl',
         'before:absolute before:inset-0 before:bg-white/25 before:backdrop-blur before:-z-10 before:-translate-y-full',
         props.class)
    "
  >
    <NuxtLink
      :to="localePath('/')"
      class="text-lg font-bold"
    >
      {{ $t("brand.name") }}
    </NuxtLink>

    <!-- Navigation -->
    <div class="block md:hidden">
      <MobileNavigation />
    </div>
    <div class="hidden md:block">
      <DesktopNavigation />
    </div>

    <LanguageSelector class="hidden md:block" />
  </header>
</template>
