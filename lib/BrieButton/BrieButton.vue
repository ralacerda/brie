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
  border-radius: calc(var(--radius-2));
  color: var(--indigo-0);
  cursor: pointer;
  font-weight: var(--font-weight-6);
  font-size: var(--font-size-2);
  padding: var(--size-2) var(--size-4);
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
    animation: spin 1s ease-in-out infinite;
    background: linear-gradient(
      to right,
      var(--indigo-9) 50%,
      var(--indigo-7) 50%,
      var(--indigo-9) 90%
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
