<!-- suppress HtmlUnknownTarget -->
<script setup lang="ts">
import { Menu } from "@iconoir/vue";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { NavigationLink } from "~/components/layout/navigation";
import { LanguageSelector } from "~/components/layout/language";
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button
        variant="ghost"
        size="icon"
      >
        <Menu class="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      class="flex flex-col justify-between"
    >
      <SheetHeader>
        <SheetTitle>{{ $t("navigation.title") }}</SheetTitle>
      </SheetHeader>

      <nav class="flex flex-col flex-1">
        <SheetClose as-child>
          <NavigationLink
            to="/"
            exact
          >
            {{ $t("home.navLink") }}
          </NavigationLink>
        </SheetClose>
        <SheetClose as-child>
          <NavigationLink to="/work">
            {{ $t("work.navLink") }}
          </NavigationLink>
        </SheetClose>
        <SheetClose as-child>
          <NavigationLink to="/team">
            {{ $t("team.navLink") }}
          </NavigationLink>
        </SheetClose>
        <SheetClose as-child>
          <NavigationLink to="/contact/joinTeam">
            {{ $t("contact.joinTeam.navLink") }}
          </NavigationLink>
        </SheetClose>
        <SheetClose as-child>
          <NavigationLink to="/contact/startAProject">
            {{ $t("contact.startAProject.navLink") }}
          </NavigationLink>
        </SheetClose>
      </nav>

      <footer class="flex flex-col">
        <LanguageSelector />
      </footer>
    </SheetContent>
  </Sheet>
</template>

<style lang="sass" scoped>
nav > *
  @apply justify-start
</style>
