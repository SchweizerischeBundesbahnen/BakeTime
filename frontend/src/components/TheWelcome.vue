<script setup lang="ts"></script>

<template>
  <div class="flex flex-row gap-2">
    <slot name="leading"></slot>
    <slot />

    <slot name="trailing"></slot>
  </div>
</template>
