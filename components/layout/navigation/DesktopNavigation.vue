<script setup lang="ts">
import { Community, Tools } from "@iconoir/vue";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { NavigationLink } from "~/components/layout/navigation";
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationLink to="/work">
          {{ $t("work.navLink") }}
        </NavigationLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationLink to="/team">
          {{ $t("team.navLink") }}
        </NavigationLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          {{ $t("contact.navLink") }}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[300px] gap-3 p-4">
            <li>
              <NavigationMenuLink as-child>
                <NavigationLink
                  to="/contact/joinTeam"
                  class="item"
                >
                  <span class="icon"><Community /></span>
                  {{ $t("contact.joinTeam.navLink") }}
                </NavigationLink>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink as-child>
                <NavigationLink
                  to="/contact/startAProject"
                  class="item"
                >
                  <span class="icon"><Tools /></span>
                  {{ $t("contact.startAProject.navLink") }}
                </NavigationLink>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<style lang="sass" scoped>
.item
  @apply justify-start h-fit w-full gap-3 pl-2

  > .icon
    @apply aspect-square w-8 grid place-items-center rounded-lg

    > *
      @apply w-6 h-6
</style>
