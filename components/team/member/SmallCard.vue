<script setup lang="ts">
import { defineProps } from "vue";
import { useI18n } from "#imports";
import type { TeamMember } from "~/types/team";

const { member } = defineProps<{
  member: TeamMember;
}>();
const { t } = useI18n();
const roles = member.roles.map((role: string) => t(`generics.roles.${role}`));
</script>

<template>
  <Card class="overflow-hidden max-w-60 h-72 grid grid-rows-[40%_1fr] lg:grid-rows-[100%_0fr] lg:hover:grid-rows-[40%_1fr] transition-all duration-300 ease-in-out">
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
          />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
