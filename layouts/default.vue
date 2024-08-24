<script setup lang="ts">
import { NavBar } from "~/components/layout/navigation";
import { ScreenSizeIndicator } from "~/components/dev";
import { PageFooter } from "~/components/layout/footer";
</script>

<template>
  <div
    class="flex flex-col items-center"
    data-layout="default"
  >
    <ScreenSizeIndicator />
    <NavBar class="sticky top-0 md:top-8" />

    <div class="mx-auto w-wrapper lg:w-respWrapper">
      <slot />
      <PageFooter />
    </div>
  </div>
</template>
