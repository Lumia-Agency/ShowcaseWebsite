<script setup lang="ts">
import { useI18n } from "#imports";

const { t } = useI18n();
</script>

<template>
  <h1>{{ t("home.hero.title") }}</h1>
</template>
