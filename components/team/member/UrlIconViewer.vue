<script setup lang="ts">
import { defineProps } from "vue";
import { Github, Instagram, /* Dribbble, Behance, Pinterest, */ Linkedin, Globe } from "@iconoir/vue";
import { GITHUB_REGEX, INSTAGRAM_REGEX, LINKEDIN_REGEX } from "~/lib/socialLink";
import { Button } from "~/components/ui/button";

defineProps<{
  url: string;
}>();
</script>

<template>
  <Button
    size="icon"
    variant="ghost"
  >
    <NuxtLink
      :to="url"
      target="_blank"
    >
      <Github
        v-if="GITHUB_REGEX.test(url)"
        class="icon"
      />
      <Instagram
        v-else-if="INSTAGRAM_REGEX.test(url)"
        class="icon"
      />
      <!-- <Dribbble v-else-if="false" class="icon" />
      <Behance v-else-if="false" class="icon" />
      <Pinterest v-else-if="false" class="icon" /> -->
      <Linkedin
        v-else-if="LINKEDIN_REGEX.test(url)"
        class="icon"
      />
      <Globe
        v-else
        class="icon"
      />
    </NuxtLink>
  </Button>
</template>

<style scoped>
.icon {
  @apply h-5 w-5 md:h-4 md:w-4;
}
</style>
