<script setup>
import { useDropzone } from "vue3-dropzone";
import { ref } from "vue";
import { useAsciiConverter } from "./utils/ascii";
import { DOCS } from "./utils/docs";
import { useSeo } from "./utils/useSeo";
import { TITLE } from "./utils/constants";
import AxoHeader from "@axodotdev/fringe/lib/Header.vue";
import AxoSwitch from "@axodotdev/fringe/lib/Switch.vue";
import AxoFooter from "@axodotdev/fringe/lib/Footer.vue";

useSeo();
const asciiContainer = ref(null);
const error = ref(null);
const reverse = ref(false);
const ascii = ref(null);
const isGradientOn = ref(false);
const { convert } = useAsciiConverter({
  reverse,
  ascii,
});

const saveFiles = async (files) => {
  try {
    await convert(files[0]);
  } catch (e) {
    error.value = "There was an error transforming your image :(";
    console.error(e);
  }
};

function onDrop(acceptFiles, rejectReasons) {
  if (rejectReasons.length) {
    error.value = rejectReasons[0].errors[0].message;
  } else {
    saveFiles(acceptFiles);
  }
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
  multiple: false,
  accept: "image/*",
});

const onToggle = (value) => (isGradientOn.value = value);
</script>

<template>
  <div class="flex flex-col min-h-screen h-full justify-between">
    <axo-header site-title="axii" />
    <div>
      <pre
        class="axo-gradient-text lg:text-base text-center leading-tight text-xs mt-6"
        >{{ TITLE }}</pre
      >
      <main
        class="sm:grid lg:grid-cols-2 items-center justify-center sm:px-16 px-6 mb-12"
      >
        <div class="flex flex-col items-center">
          <button
            v-bind="getRootProps()"
            class="bg-slate-800 w-[28rem] max-w-full border-4 rounded-lg border-dashed border-axo-orange p-20 mb-4 text-center cursor-pointer border-box"
          >
            <input v-bind="getInputProps()" />
            <p v-if="isDragActive" class="m-0">Drop the images here ...</p>
            <p v-if="!isDragActive" class="m-0">
              Drag 'n' drop an image here, or click to open it
            </p>
          </button>
          <div class="flex gap-4 items-center mb-8">
            <input
              id="image-reverse"
              v-model="reverse"
              type="checkbox"
              class="h-5 w-5 rounded border-axo-orange shadow-axo-orange text-axo-orange-dark focus:ring-offset-axo-pink focus:ring-offset-1 focus:ring-axo-orange bg-slate-200"
            />
            <label for="image-reverse" class="text-slate-300"
              >reverse image</label
            >
          </div>
        </div>
        <section
          class="flex flex-col items-center max-w-full m-auto min-h-full"
        >
          <pre
            v-if="ascii"
            ref="asciiContainer"
            :class="[
              'text-[6px] sm:text-[9px] font-mono bg-slate-900 whitespace-pre text-slate-300 p-4 pt-2 absolute -top-[5000px]',
            ]"
            v-html="ascii"
          ></pre>
          <pre
            v-if="ascii"
            :class="[
              isGradientOn && 'axo-gradient-text',
              'text-[6px] sm:text-[9px] font-mono bg-slate-900 whitespace-pre text-slate-300 p-4 pt-2 w-full',
            ]"
            v-html="ascii"
          />
          <pre v-if="!ascii" class="text-slate-400 whitespace-pre-wrap">{{
            DOCS
          }}</pre>
          <div
            v-if="!!ascii"
            class="flex justify-between items-center w-full px-4"
          >
            <div class="flex">
              <copy-text-button :ascii="ascii" />
              <download-image-button :container="asciiContainer" />
              <copy-code-button :ascii="ascii" />
            </div>
            <axo-switch
              v-if="ascii"
              labels="gradient"
              class="text-slate-300 text-xs"
              @toggled="onToggle"
            />
          </div>
        </section>
        <span v-if="error" class="text-axo-orange-dark">
          {{ error }}
        </span>
      </main>
    </div>
    <axo-footer />
  </div>
</template>
