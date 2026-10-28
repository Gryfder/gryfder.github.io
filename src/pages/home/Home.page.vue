<script setup lang="ts">
import { useElementBounding, useElementSize } from '@vueuse/core';
import { computed, ref, useTemplateRef } from 'vue';

import MALAYSIA_FLAG from '@/assets/icon/flag/malaysia.svg';
import SINGAPORE_FLAG from '@/assets/icon/flag/singapore.svg';
import TAIWAN_FLAG from '@/assets/icon/flag/taiwan.svg';
import UNITED_KINGDOM_FLAG from '@/assets/icon/flag/united-kingdom.svg';
import { FULL_NAME } from '@/model/fursona.model.js';
import { GALLERIES } from '@/model/gallery.model.js';
import { SOCIALS } from '@/model/social.model.js';

import CardSocialV2 from './components/CardSocial-v2.vue';
import CountryLabel from './components/CountryLabel.vue';
import SectionTitle from './components/SectionTitle.vue';

const selfRef = ref<HTMLDivElement>();
const { width } = useElementSize(selfRef);
const paddingTopMin = computed(() => 16);
const paddingTopMax = computed(() => 64);
const paddingTop = computed(() => {
  const distance = Math.max(width.value - 810, 0);

  return Math.min(
    paddingTopMin.value + (distance / 100) * paddingTopMin.value,
    paddingTopMax.value,
  );
});
const selfWide = computed(() => width.value > 810);

const homeHeaderRef = useTemplateRef('homeHeaderRef');
const { width: homeHeaderWidth } = useElementBounding(homeHeaderRef);
const homeHeaderThin = computed(() => homeHeaderWidth.value < 500);

const sectionSocialRef = useTemplateRef('sectionSocialRef');
const { width: sectionSocialWidth } = useElementBounding(sectionSocialRef);
const sectionSocialThin = computed(() => sectionSocialWidth.value < 500);

const sectionGalleryRef = useTemplateRef('sectionGalleryRef');
const { width: sectionGalleryWidth } = useElementBounding(sectionGalleryRef);
const sectionGalleryThin = computed(() => sectionGalleryWidth.value < 500);
</script>

<template>
  <div ref="selfRef" class="page-home" :data-wide="selfWide">
    <div class="page-home-body" :style="{ zIndex: '1', paddingTop: `${paddingTop}px` }">
      <div ref="homeHeaderRef" class="home-header" :data-thin="homeHeaderThin">
        <img src="@/assets/img/pfp.webp" />

        <div class="home-header-body">
          <div class="home-header-title">
            <b>{{ FULL_NAME }}</b>
            <span>Chatham Raven</span>
          </div>

          <div class="home-header-labels">
            <div>
              <CountryLabel :icon="MALAYSIA_FLAG" title="Malaysia" />
              <CountryLabel :icon="SINGAPORE_FLAG" title="Singapore" />
            </div>

            <div>
              <span>
                中文
                <img class="home-header-flag" :src="TAIWAN_FLAG" />
                +(潮/粵) / EN
                <img class="home-header-flag" :src="UNITED_KINGDOM_FLAG" />
              </span>
            </div>

            <div>
              <span>Disciple † ★</span>
            </div>
          </div>
        </div>
      </div>

      <div ref="sectionSocialRef" class="page-home-section-social-v2">
        <div class="page-home-socials">
          <CardSocialV2
            v-for="social of SOCIALS"
            :key="social.title"
            :item="social"
            :use-thin="sectionSocialThin"
          />
        </div>
      </div>

      <div ref="sectionGalleryRef" class="page-home-section-gallery">
        <SectionTitle :style="{ textAlign: sectionGalleryThin ? 'center' : 'left' }">
          Gallery
        </SectionTitle>
        <div class="page-home-galleries">
          <img v-for="gallery of GALLERIES" :key="gallery.src" :src="gallery.src" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-home {
  --padding-block: 1rem;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: radial-gradient(circle at 50% 6rem, #5568e4, transparent 30%);
  background: radial-gradient(
    ellipse 60% 25rem at 50% 0rem,
    rgba(85, 104, 228, 0.3),
    transparent 70%
  );

  .page-home-body {
    width: 100%;
    max-width: 50rem;
    padding-inline: 1rem;
    box-sizing: border-box;
    padding-block: var(--padding-block);
    gap: 2rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    .home-header {
      padding-inline: 1rem;
      gap: 1.25rem;

      display: flex;

      & > img {
        width: 9.5em;
        max-width: 100%;
        aspect-ratio: 1/1;

        border-radius: 1.25em;

        box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.35);
        object-fit: cover;
      }

      .home-header-body {
        gap: 1.5rem;
        display: flex;
        flex-direction: column;

        .home-header-title {
          line-height: 1.2;
          display: flex;
          flex-direction: column;
          justify-content: center;

          & > b {
            font-weight: 700;
            font-size: 2.2rem;
            line-height: 1.5;
          }

          & > span {
            opacity: 0.75;
            font-size: 0.95rem;
          }
        }

        .home-header-labels {
          gap: 0.4rem;
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          opacity: 0.9;

          & > div {
            gap: 0.4em;

            display: flex;
            align-items: center;
            justify-content: inherit;
            flex-wrap: wrap;
          }

          /* 2. Flag alignment: vertically centered and rounded slightly */
          .home-header-flag {
            height: 0.85em;
            vertical-align: middle;
            border-radius: 2px;
            margin-inline: 0.15em;
          }
        }
      }

      &[data-thin='true'] {
        padding-top: 1rem;

        flex-direction: column;
        align-items: center;
        text-align: center;

        .home-header-body {
          .home-header-labels {
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    .page-home-section-social-v2 {
      display: flex;
      flex-direction: column;

      .page-home-socials {
        padding: 0.5rem 1rem;
        gap: 0.5rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

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
          flex: 1 1 8rem;
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
  }
}
</style>
