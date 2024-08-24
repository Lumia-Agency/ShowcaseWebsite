<script setup lang="ts">
import { defineProps } from "vue";
import { Card, CardHeader, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import type { Project } from "~/types/project";
import { cn } from "~/lib/utils";
import { useLocalePath } from "#imports";

const props = defineProps<{
  class?: string;
  project: Project;
}>();

const localePath = useLocalePath();
</script>

<template>
  <Card :class="cn('relative rounded-2xl isolate', props.class)">
    <NuxtLink
      :to="localePath(`/work/${project.id}`)"
      class="absolute inset-0 z-10"
    />
    <CardHeader>
      <NuxtImg
        v-if="project.banner"
        :src="project.banner"
        class="h-40 w-full rounded-lg object-cover"
      />
      <span
        v-else
        class="h-40 w-full bg-secondary rounded-lg"
      />
    </CardHeader>
    <CardContent class="flex flex-col gap-6">
      <div class="flex flex-col">
        <p class="text-2xl font-bold">
          {{ project.name }}
        </p>
        <span class="text-xs text-muted-foreground">{{ $t(`projectTypes.${project.type}`) }}</span>
      </div>
      <p class="leading-relaxed line-clamp-5">
        {{ project.caption }}
      </p>
    </CardContent>
    <CardFooter>
      <Button
        variant="secondary"
        class="relative z-20"
      >
        {{ $t("buttons.seeMore") }}
      </Button>
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>
