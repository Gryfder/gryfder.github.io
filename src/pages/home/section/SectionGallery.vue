<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';
import { computed, ref } from 'vue';

import { GALLERIES } from '@/model/Gallery';

import SectionTitle from '../components/SectionTitle.vue';

const selfRef = ref();
const { width } = useElementBounding(selfRef);

const isThin = computed(() => width.value < 500);
</script>

<template>
  <div ref="selfRef" class="page-home-section-gallery">
    <SectionTitle :style="{ textAlign: isThin ? 'center' : 'left' }">Gallery</SectionTitle>
    <div class="page-home-galleries">
      <img v-for="gallery of GALLERIES" :key="gallery.src" :src="gallery.src" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-home-section-gallery {
  display: flex;
  flex-direction: column;

  .page-home-galleries {
    width: 100%;
    min-height: 10rem;
    padding: 1rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > img {
      width: max-content;
      max-width: 100%;
      height: 10rem;
      border-radius: 0.5rem;
      flex: 1;

      object-fit: cover;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  container: gallery / inline-size;
  @container gallery (max-width: 20rem) {
    .page-home-galleries {
      min-height: 8rem;

      & > img {
        height: 8rem;
      }
    }
  }
}
</style>
