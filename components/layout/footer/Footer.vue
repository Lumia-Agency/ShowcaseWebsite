<script setup lang="ts">
import { Phone, Mail } from "@iconoir/vue";
import { FooterLink } from "./";
</script>

<template>
  <footer class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-4 pt-16 pb-6 md:pt-32 md:pb-16">
    <div class="flex flex-col gap-8 md:gap-16">
      <div>
        <p class="text-xl font-bold">
          {{ $t("brand.name") }}
        </p>
        <span class="text-muted-foreground">{{ $t("brand.slogan") }}</span>
      </div>
      <div class="flex flex-col items-start -ml-4">
        <Button
          variant="link"
          as-child
        >
          <NuxtLink
            to="tel:+33388315386"
            class="gap-2"
          >
            <Phone stroke-width="2" />
            03.88.31.53.86
          </NuxtLink>
        </Button>
        <Button
          variant="link"
          as-child
        >
          <NuxtLink
            to="mailto:contact@lumia.com"
            class="gap-2"
          >
            <Mail stroke-width="2" />
            contact@lumia.com
          </NuxtLink>
        </Button>
      </div>
    </div>

    <div class="grid gap-8 md:gap-4 lg:grid-cols-2 lg:col-start-3 lg:col-span-2">
      <section class="flex md:justify-end">
        <div class="flex flex-col">
          <p class="font-bold lg:ml-4">
            {{ $t("footer.links.utils.title") }}
          </p>
          <div class="flex flex-col -ml-4 lg:ml-0 lg:-mr-4">
            <FooterLink to="/terms/legalNotice">
              {{ $t("footer.links.utils.legalNotice") }}
            </FooterLink>
            <FooterLink to="/terms/cgv">
              {{ $t("footer.links.utils.cgv") }}
            </FooterLink>
            <FooterLink to="/terms/cgu">
              {{ $t("footer.links.utils.cgu") }}
            </FooterLink>
          </div>
        </div>
      </section>
      <section class="flex md:justify-end">
        <div class="flex flex-col">
          <p class="font-bold lg:ml-4">
            {{ $t("footer.links.projects.title") }}
          </p>
          <div class="flex flex-col -ml-4 lg:ml-0 lg:-mr-4">
            <p class="text-muted-foreground px-4 py-2 text-sm">
              {{ $t("footer.links.projects.noForNow") }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="flex flex-col items-start md:items-center md:col-span-2 lg:col-start-2 md:pt-12 lg:pt-16">
      <p class="text-muted-foreground">
        {{ $t("footer.legal.rights") }} &copy; 2024
      </p>
      <p>
        {{ $t("footer.legal.credits") }} <span class="font-bold">{{ $t("brand.name") }}</span>
      </p>
    </div>
  </footer>
</template>
