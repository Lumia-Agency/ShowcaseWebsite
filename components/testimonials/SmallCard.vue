<script setup lang="ts">
import { defineProps } from "vue";
import { StarSolid } from "@iconoir/vue";
import { Card, CardContent } from "~/components/ui/card";
import type { Testimonial } from "~/types/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const props = defineProps<{
  class?: string;
  testimonial: Testimonial;
}>();
</script>

<template>
  <Card :class="props.class">
    <CardContent class="p-6 flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <Avatar
          shape="square"
          size="base"
        >
          <AvatarImage
            v-if="testimonial.author.avatar"
            :src="testimonial.author.avatar"
          />
          <AvatarFallback>{{ testimonial.author.fullName.split(' ').map((part: string) => part.substring(0, 1)).join('') }}</AvatarFallback>
        </Avatar>
        <div class="flex flex-col flex-1">
          <p class="font-medium truncate">
            {{ testimonial.author.fullName }}
          </p>
          <p class="text-sm text-muted-foreground line-clamp-1">
            {{ testimonial.author.role }} · {{ testimonial.author.company }}
          </p>
        </div>
      </div>
      <ul class="flex">
        <li
          v-for="i in testimonial.mark"
          :key="i"
        >
          <StarSolid />
        </li>
        <li
          v-for="i in 5 - testimonial.mark"
          :key="i"
          class="text-muted-foreground"
        >
          <StarSolid />
        </li>
      </ul>
      <p class="leading-relaxed italic line-clamp-6">
        "{{ testimonial.comment }}"
      </p>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>
