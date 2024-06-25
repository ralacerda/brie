<script setup lang="ts">
import "iconify-icon";

defineProps<{
  /** Disables the button */
  disabled?: boolean;
  busy?: boolean;
  icon?: string;
}>();
</script>

<template>
  <button class="brie-button" type="button" :disabled :aria-busy="busy">
    <slot /><iconify-icon
      v-if="icon"
      :icon
      style="font-size: 1.2rem"
    ></iconify-icon>
  </button>
</template>

<style scoped lang="scss">
.brie-button {
  position: relative;
  background-color: var(--brie-primary-7);
  border: none;
  border-radius: calc(var(--brie-radius));
  color: var(--brie-primary-0);
  cursor: pointer;
  font-weight: var(--brie-bold);
  font-size: var(--brie-font-size-2);
  padding: var(--brie-size-2) var(--brie-size-4);
  transition: background-color 0.2s;
  line-height: 1;
  display: flex;
  gap: var(--brie-size-2);

  &:hover {
    background-color: var(--brie-primary-6);
  }

  &:active {
    background-color: var(--brie-primary-9);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--brie-primary-5);
    outline-offset: 2px;
  }

  &[aria-busy="true"] {
    cursor: progress;
    animation: spin 1s ease-in-out infinite;
    background: linear-gradient(
      to right,
      var(--brie-primary-9) 50%,
      var(--brie-primary-7) 50%,
      var(--brie-primary-9) 90%
    );
    background-size: 200% 100%;
  }
}

@keyframes spin {
  to {
    background-position: 200%;
  }
}
</style>
