<script setup lang="ts">
import { NavBar } from "~/components/layout/navigation";
import { ScreenSizeIndicator } from "~/components/dev";
import { PageFooter } from "~/components/layout/footer";
</script>

<template>
  <div data-layout="default">
    <NavBar class="fixed top-0 left-1/2 -translate-x-1/2" />
    <ScreenSizeIndicator />

    <div class="mx-auto w-wrapper lg:w-respWrapper">
      <slot />
      <PageFooter />
    </div>
  </div>
</template>
