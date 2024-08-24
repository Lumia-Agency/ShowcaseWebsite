<script setup lang="ts">
import { Search, Filter } from "@iconoir/vue";
import { computed, ref } from "vue";
import { Input } from "~/components/ui/input";
import { ProjectCard } from "~/components/projects";
import projects from "~/assets/mocks/projects";
import { ComingSoonElement } from "~/components/dev";
import type { Project } from "~/types/project";

const search = ref();
const { t } = useI18n();
const formatted = (entry: string): string => entry.toLowerCase().replaceAll(" ", "");
const filteredProjects = computed((): Project[] => {
  if (!search.value) return projects;
  return projects.filter((project: Project) => {
    if (formatted(project.name).includes(formatted(search.value))) return true;
    return formatted(t(`projectTypes.${project.type}`)).includes(formatted(search.value));
  });
});
</script>

<template>
  <main
    data-page="work"
    class="grid md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9"
  >
    <header class="grid gap-6 py-12 md:py-20 lg:py-24 md:col-span-3 lg:col-span-4 xl:col-span-5">
      <h1 class="text-6xl font-extrabold leading-snug">
        {{ $t("work.title") }}
      </h1>
      <p class="leading-relaxed text-muted-foreground">
        {{ $t("work.caption") }}
      </p>
    </header>

    <section
      data-section="gallery"
      class="flex flex-col gap-4 md:gap-6 md:col-span-5 lg:col-span-7 xl:col-span-9"
    >
      <header class="flex gap-3 items-center">
        <div class="flex-1 relative text-muted-foreground hover:text-foreground">
          <Input
            v-model="search"
            :placeholder="$t('work.searchPlaceholder')"
            class="pl-10 text-foreground"
          />
          <span class="absolute left-4 top-1/2 -translate-y-1/2">
            <Search />
          </span>
        </div>
        <ComingSoonElement>
          <Button
            variant="secondary"
            class="gap-3"
            disabled
          >
            <Filter />
            {{ $t("work.filterCTA") }}
          </Button>
        </ComingSoonElement>
      </header>

      <div class="flex flex-col gap-4 md:gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </main>
</template>
