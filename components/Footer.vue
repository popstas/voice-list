<template>
  <el-footer class="footer">
    <a class="footer__link" :href="$store.state.homepage" target="_blank">
      <icon name="brands/github"></icon>
      {{ $store.state.name }} {{ $store.state.version }}
    </a>
  </el-footer>
</template>

<style lang="scss">
.footer {
  padding: 30px 5px 0;
  &__link {
    display: inline-block;
    margin-right: 15px;
    text-decoration: none;
    color: #333;
    &:hover {
      color: #666;
    }
  }
}
</style>

<script>
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/calendar-alt';
import Icon from 'vue-awesome/components/Icon';

export default {};
</script>
