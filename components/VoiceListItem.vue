<template>
  <li class="voice-list__item" :rel="id">
    <span class="text">{{ text }}</span>
    <span class="description">{{ description }}</span>
  </li>
</template>

<script>
export default {
  props: ['id', 'text', 'description'],
  data() {
    return {
    };
  },

  watch: {
  },

  computed: {
  },

  methods: {
  }
};
</script>
