<script setup lang="ts">
import { defineProps } from "vue";
import { useI18n, useLocalePath } from "#imports";
import type { TeamMember } from "~/types/team";
import { cn } from "~/lib/utils";

const props = defineProps<{
  class?: string;
  member: TeamMember;
}>();
const { t } = useI18n();
const roles = props.member.roles.map((role: string) => t(`generics.roles.${role}`));
const localePath = useLocalePath();
</script>

<template>
  <Card :class="cn('relative isolate overflow-hidden h-72 grid grid-rows-[40%_1fr] lg:grid-rows-[100%_0fr] lg:hover:grid-rows-[40%_1fr] transition-all duration-300 ease-in-out', props.class)">
    <NuxtLink
      :to="localePath(`/team/${member.identifier}`)"
      class="absolute inset-0 z-10"
    />
    <CardHeader class="p-0">
      <NuxtImg
        v-if="member.pictureUrl"
        :src="member.pictureUrl"
        class="w-full h-full object-cover"
      />
    </CardHeader>
    <CardContent class="overflow-hidden p-0">
      <div class="p-6 flex flex-col h-full">
        <p class="text-xl font-bold">
          {{ member.fullName }}
        </p>
        <span class="text-xs text-muted-foreground">{{ roles.join(" · ") }}</span>
        <div
          v-if="member.socials.length"
          class="flex items-center mt-auto"
        >
          <TeamMemberUrlIconViewer
            v-for="(url, index) in member.socials"
            :key="`${member.identifier}-${index}`"
            :url="url"
            class="z-20"
          />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
