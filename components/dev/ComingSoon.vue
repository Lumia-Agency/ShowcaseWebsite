<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <slot />
      </TooltipTrigger>
      <TooltipContent>
        <p>{{ $t("tooltip.comingSoon") }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
