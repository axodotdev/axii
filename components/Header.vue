<script setup>
import AxoLink from "@axodotdev/fringe/lib/Link.vue";

import Bars3Icon from "@axodotdev/fringe/lib/Icons/Bars3Icon.vue";
import CloseIcon from "@axodotdev/fringe/lib/Icons/CloseIcon.vue";
import { computed, watch, ref } from "vue";

const menuOpen = ref(false);

const props = defineProps({
  links: {
    type: Array,
    required: false,
    default: () => [],
  },
  returnLink: {
    type: Boolean,
    required: false,
    default: true,
  },
  siteTitle: {
    type: String,
    required: false,
    default: "",
  },
});

const additionalLinkClasses = `
        text-xl
        sm:text-base
      `;
const listLinkClasses = `
        list-none
        flex
        items-center
        gap-x-8
        h-16
      `;

const axoReturn = [{ name: `>o.o< →`, location: "https://axo.dev" }];

const showSeparated = computed(() => props.siteTitle && props.returnLink);
const hasLeftItems = Boolean(props.siteTitle) || props.returnLink;

const wrapperClasses = computed(() => {
  const mainClasses = `items-center gap-x-4 border-b border-axo-orange sm:px-16 px-4`;

  return [
    hasLeftItems ? "justify-between" : "justify-end hidden sm:flex",
    mainClasses,
  ];
});

watch(menuOpen, (open) => {
  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
</script>

<template>
  <nav :class="wrapperClasses">
    <ul v-if="links.length" :class="listLinkClasses">
      <li v-for="link in links" :key="link.name">
        <axo-link
          :class="additionalLinkClasses"
          :href="link.location"
          :as="link.as"
        >
          {{ link.name }}
        </axo-link>
      </li>
    </ul>
    <div v-if="showSeparated" class="flex items-center justify-between grow">
      <axo-link href="/">
        {{ siteTitle }}
      </axo-link>
      <ul v-if="returnLink" :class="[listLinkClasses, 'justify-end']">
        <li v-for="link in axoReturn" :key="link.name">
          <axo-link :class="additionalLinkClasses" :href="link.location">
            {{ link.name }}
          </axo-link>
        </li>
      </ul>
    </div>
  </nav>
  <nav
    v-if="!hasLeftItems"
    class="justify-end p-4 border-b border-axo-orange flex sm:hidden"
  >
    <button @click="menuOpen = true">
      <bars3-icon class="text-axo-pink h-8 w-8" />
    </button>

    <transition appear name="slide">
      <div v-if="menuOpen" class="fixed h-screen w-screen z-20 top-0 left-0">
        <button class="absolute z-30 top-4 right-4" @click="menuOpen = false">
          <close-icon class="text-axo-pink h-8 w-8" />
        </button>
        <ul
          class="dark:bg-slate-900 left-0 flex items-center justify-center flex-col h-screen"
        >
          <li
            v-for="link in links"
            :key="link.name"
            class="mb-6 last:mb-0"
            @click.capture="menuOpen = false"
          >
            <axo-link
              :href="link.location"
              :as="link.as"
              class="text-2xl font-bold"
            >
              {{ link.name }}
            </axo-link>
          </li>
        </ul>
      </div></transition
    >
  </nav>
</template>

<style>
.slide-enter-active {
  animation: slide-in 0.3s;
}
.slide-leave-active {
  animation: slide-in 0.3s reverse;
}
@keyframes slide-in {
  0% {
    top: -100vh;
  }
  100% {
    top: 0;
  }
}
</style>
