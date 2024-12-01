<script setup lang="ts">
import type { SocialModel } from '@/model/Social';

withDefaults(defineProps<{ item: SocialModel }>(), {});
</script>

<template>
  <a class="card-social-v2" :href="item.href" target="_blank">
    <img :src="item.icon" />
  </a>
</template>

<style lang="scss" scoped>
.card-social-v2 {
  width: 3rem;
  height: 3rem;

  display: grid;
  place-items: center;

  font-size: 0.8rem;
  text-align: start;
  border-radius: 50%;
  aspect-ratio: 1/1;
  transition: all 200ms ease;
  background-color: hsla(0, 0%, 100%, 0.8);

  & > img {
    width: 50%;
    height: 50%;

    object-fit: contain;
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }
}
</style>
