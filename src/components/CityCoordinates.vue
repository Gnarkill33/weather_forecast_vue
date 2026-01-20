<script setup lang="ts">
defineProps({
  coordinates: { type: Object },
})
</script>

<template>
  <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <div class="block-bottom-pic pic-coords"></div>
        <div class="block-bottom-texts">
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">Longitude: {{ coordinates?.lon }}</div>
            <div class="block-bottom-text-block-desc">
              Longitude measures distance east or west of the prime meridian.
            </div>
          </div>
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">Latitude: {{ coordinates?.lat }}</div>
            <div class="block-bottom-text-block-desc">
              Latitude lines start at the equator (0 degrees latitude) and run east and west,
              parallel to the equator.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
