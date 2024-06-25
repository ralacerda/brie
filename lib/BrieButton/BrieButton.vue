<script setup lang="ts">
defineProps<{
  /** Disables the button */
  disabled?: boolean;
  busy?: boolean;
}>();
</script>

<template>
  <button
    class="brie-button"
    type="button"
    :disabled
    :key="String(busy)"
    :aria-busy="busy"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.brie-button {
  position: relative;
  background-color: var(--indigo-7);
  border: none;
  border-radius: calc(var(--radius-2) - 1px);
  color: var(--indigo-1);
  cursor: pointer;
  font-size: var(--font-size-1);
  padding: var(--size-2) var(--size-3);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--indigo-6);
  }

  &:active {
    background-color: var(--indigo-9);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--indigo-5);
    outline-offset: 2px;
  }

  &[aria-busy="true"] {
    cursor: progress;
    background-color: var(--indigo-9);
  }

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: var(--radius-2);
    background-color: var(--indigo-7);
  }

  &[aria-busy="true"]::before {
    background-image: linear-gradient(90deg, var(--gray-5), var(--gray-9));
    background-size: 200%;
    background-position: top left;
    animation: spin 1s infinite ease-in-out;
  }
}

@keyframes spin {
  to {
    background-position: 200%;
  }
}
</style>
