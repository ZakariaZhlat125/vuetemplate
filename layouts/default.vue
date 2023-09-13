<template>
  <ElementsLoader :duration="1000" />
  <ClientOnly>
    <div :class="[$i18n.locale == 'ar' ? 'ar-dir' : 'en-dir']">
      <SharedNavbar />
      <slot />
      <SharedFooter />
    </div>
  </ClientOnly>
</template>

<script setup></script>

<style></style>
