<script setup>
import { ref } from "vue";
import AxoButton from "@axodotdev/fringe/lib/Button.vue";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const props = defineProps({
  container: { type: Object, required: true },
});

const messages = {
  download: "Download as image",
  downloaded: "Downloaded!",
};
const downloadMessage = ref(messages.download);

const downloadImage = async () => {
  const canvas = await html2canvas(props.container);
  const dataUrl = canvas.toDataURL("image/png");
  saveAs(dataUrl, "axii.png");
  downloadMessage.value = messages.downloaded;
  window.setTimeout(() => {
    downloadMessage.value = messages.download;
  }, 2000);
};
</script>

<template>
  <axo-button
    class="!w-auto px-3 py-2 !rounded-none tooltip !m-0 block"
    :data-text="downloadMessage"
    @click="downloadImage"
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
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  </axo-button>
</template>
