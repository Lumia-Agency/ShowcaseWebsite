<script setup lang="ts">
import { defineProps } from "vue";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import type { Project } from "~/types/project";
import { cn } from "~/lib/utils";
import UrlIconViewer from "~/components/team/member/UrlIconViewer.vue";
import { useLocalePath } from "#imports";

const props = defineProps<{
  class?: string;
  project: Project;
}>();
const localePath = useLocalePath();
</script>

<template>
  <Card :class="cn('relative isolate grid lg:grid-cols-5 gap-6 lg:h-[30rem] p-6 md:p-8 lg:p-12', props.class)">
    <NuxtLink
      :to="localePath(`/work/${project.id}`)"
      class="absolute inset-0 z-10"
    />
    <CardHeader class="p-0 lg:col-span-2 flex flex-col gap-6">
      <div>
        <h2 class="text-4xl font-bold">
          {{ project.name }}
        </h2>
        <p class="text-sm text-muted-foreground">
          {{ $t(`projectTypes.${project.type}`) }}
        </p>
      </div>
      <p class="leading-relaxed">
        {{ project.caption }}
      </p>
      <ul class="lg:mt-auto flex relative z-20">
        <li
          v-for="(link, index) in project.links"
          :key="index"
        >
          <UrlIconViewer :url="link" />
        </li>
      </ul>
    </CardHeader>
    <CardContent class="p-0 row-start-1 lg:row-start-auto lg:col-span-3 relative">
      <NuxtImg
        v-if="project.banner"
        :src="project.banner"
        class="rounded h-40 w-full lg:h-full lg:absolute lg:inset-0 object-cover"
      />
      <span
        v-else
        class="rounded h-40 w-full lg:h-full lg:absolute lg:inset-0 bg-muted"
      />
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
