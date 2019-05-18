<template lang="html">
  <div class="wrapper">
    <app-header />
    <app-menu />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import {
  Header,
  Menu,
} from '@Public/components/_globals';

export default {
  components: {
    appHeader: Header,
    appMenu: Menu,
  },
};
</script>

<style lang="css" scoped>
.content {
  margin: 0 auto;
  padding: 30px;
  max-width: var(--publicContentWidth);
  box-sizing: content-box;
}
</style>
