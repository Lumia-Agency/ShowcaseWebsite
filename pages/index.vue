<script setup lang="ts">
import { useI18n, useLocalePath, definePageMeta } from "#imports";
import { SmallTeamMemberCard } from "~/components/team/member";
import { ProjectSmallCard } from "~/components/projects";
import { TestimonialSmallCard } from "~/components/testimonials";
import team from "~/assets/mocks/team";
import projects from "~/assets/mocks/projects";
import testimonials from "~/assets/mocks/testimonials";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

definePageMeta({
  layout: "default-without-dom",
});

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <main data-page="home">
    <section
      data-section="hero"
      class="flex flex-col"
    >
      <div class="max-w-[58rem] leading-snug flex flex-col items-start gap-8 my-auto">
        <h1 class="font-black text-5xl sm:text-[3.5rem] md:text-[4.125rem] lg:text-[7rem]">
          {{ t("home.hero.title") }}
        </h1>
        <p class="text-muted-foreground max-w-[34.5rem] leading-relaxed">
          {{ t("home.hero.caption") }}
        </p>
        <Button>{{ t("home.hero.cta") }}</Button>
      </div>
    </section>
    <section
      data-section="projects"
      class="py-20 md:py-40 flex flex-col gap-8"
    >
      <header class="grid md:grid-cols-7 lg:grid-cols-9 gap-6 items-end">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-snug md:col-span-3 lg:col-span-4">
          {{ $t("home.projects.title") }}
        </h2>
        <p class="text-muted-foreground md:col-span-4 lg:col-span-5">
          {{ $t("home.projects.caption") }}
        </p>
      </header>

      <div class="w-full grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectSmallCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

      <footer class="self-end -mt-4 sm:mt-0">
        <Button variant="ghost">
          <NuxtLink :to="localePath('/work')">
            {{ $t("home.projects.cta") }}
          </NuxtLink>
        </Button>
      </footer>
    </section>
    <section
      data-section="team"
      class="py-20 md:py-40 grid md:grid-cols-7 lg:grid-cols-9 gap-6"
    >
      <header class="flex flex-col gap-6 sm:col-span-3 lg:col-span-4">
        <h2 class="text-4xl md:text-5xl font-extrabold">
          {{ $t("home.team.title") }}
        </h2>
        <p class="leading-relaxed text-muted-foreground">
          {{ $t("home.team.caption") }}
        </p>
        <div class="flex gap-3">
          <Button>{{ $t("home.team.cta") }}</Button>
          <Button variant="secondary">
            {{ $t("home.team.cta2") }}
          </Button>
        </div>
      </header>

      <div class="grid grid-rows-[min-content] gap-4 lg:gap-6 sm:grid-cols-4 lg:grid-cols-5 sm:col-span-4 lg:col-span-5">
        <SmallTeamMemberCard
          v-for="(member, index) in team.members"
          :key="member.identifier"
          :member="member"
          :class="cn('sm:col-span-2', index % 2 === 0 ? 'lg:col-start-2' : '')"
        />
      </div>
    </section>
    <section
      data-section="testimonials"
      class="py-20 md:py-40 grid md:grid-cols-7 lg:grid-cols-9 gap-6 md:items-center"
    >
      <header class="flex flex-col gap-6 md:col-start-5 lg:col-start-6 sm:col-span-3 lg:col-span-4">
        <h2 class="text-4xl md:text-5xl font-extrabold">
          {{ $t("home.testimonials.title") }}
        </h2>
        <p class="leading-relaxed text-muted-foreground">
          {{ $t("home.testimonials.caption") }}
        </p>
        <Button class="self-start">
          {{ $t("home.testimonials.cta") }}
        </Button>
      </header>

      <div class="grid grid-rows-[min-content] gap-4 row-start-1 lg:gap-6 sm:grid-cols-4 lg:grid-cols-5 sm:col-span-4 lg:col-span-5">
        <TestimonialSmallCard
          v-for="(testimonial, index) in testimonials"
          :key="`testimonial-${index}`"
          :testimonial="testimonial"
          class="col-span-2"
        />
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
[data-section]
  @apply min-h-dvh
</style>
