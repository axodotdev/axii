<script setup>
import { ref } from "vue";
import AxoButton from "@axodotdev/fringe/lib/Button.vue";

const props = defineProps({
  ascii: { type: String, required: true },
});

const messages = {
  copy: "Copy text to clipboard",
  copied: "Copied!",
};
const copyMessage = ref(messages.copy);
const copyToClipboard = async () => {
  await navigator.clipboard.writeText(props.ascii);
  copyMessage.value = messages.copied;
  window.setTimeout(() => {
    copyMessage.value = messages.copy;
  }, 2000);
};
</script>

<template>
  <axo-button
    class="!w-auto px-3 py-2 !rounded !rounded-r-none tooltip !m-0 block"
    :data-text="copyMessage"
    @click="copyToClipboard"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 16"
      stroke="currentColor"
      fill="currentColor"
      class="w-6 h-6"
      stroke-width="0"
    >
      <path
        fill-rule="evenodd"
        d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"
      ></path>
    </svg>
  </axo-button>
</template>
