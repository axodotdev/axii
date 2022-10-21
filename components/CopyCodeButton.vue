<script setup>
import { ref, toRef } from "vue";
import AxoButton from "@axodotdev/fringe/lib/Button.vue";

const props = defineProps({
  ascii: { type: String, required: true },
  gradient: { type: Boolean, required: true },
});

const gradient = toRef(props, "gradient");

const buildHTML = () => {
  const html = `<pre class="ascii">
${props.ascii}
</pre>`;
  const css = `<style>
  ${
    gradient.value
      ? `:root {
    --color-pink: hsla(326, 100%, 73%, 1);
    --color-orange: hsla(0, 87%, 70%, 1);
  }

  @keyframes animation-gradient-ascii {
  0% {
    background-position: 0 1600px;
  }
  100% {
    background-position: 1600px 0;
  }
}
  `
      : ""
  }
.ascii {
  background-color: transparent; 
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; 
  white-space: pre-wrap;
  font-size: 9px;
  color: rgb(5 23 42);
  ${
    gradient.value
      ? `
    background: -webkit-linear-gradient( left, var(--color-orange), var(--color-pink), var(--color-orange) );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; 
    background-clip: text;
    background-size: 1600px 200px;
    animation-duration: 3s;
    animation-name: animation-gradient-ascii;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  `
      : ""
  }
}
</style>`;

  return `${html}
${css} 
  `;
};

const messages = {
  copy: "Copy HTML/CSS to clipboard",
  copied: "Copied!",
};
const copyMessage = ref(messages.copy);
const copyToClipboard = async () => {
  const code = buildHTML();
  await navigator.clipboard.writeText(code);
  copyMessage.value = messages.copied;
  window.setTimeout(() => {
    copyMessage.value = messages.copy;
  }, 2000);
};
</script>

<template>
  <axo-button
    class="!w-auto px-3 py-2 !rounded !rounded-l-none tooltip !m-0 block"
    :data-text="copyMessage"
    @click="copyToClipboard"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  </axo-button>
</template>
