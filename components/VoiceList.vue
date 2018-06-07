<template>
  <div class="voice-list">
    <SearchInput @speechInput="onSpeechInput"></SearchInput>
    <ul class="voice-list__list">
      <VoiceListItem v-for="item in items" :id="item.id" :text="item.text" :description="item.description" :key="item.id"></VoiceListItem>
    </ul>
  </div>
</template>

<script>
import VoiceListItem from '~/components/VoiceListItem'
import SearchInput from "~/components/SearchInput";
import {ADD_ITEM, REPLACE_LAST_ITEM} from '~/store';
export default {
  components: {
    SearchInput, VoiceListItem
  },

  computed: {
    items(){
      return this.$store.state.items;
    }
  },

  methods: {
    onSpeechInput(val){
      if (val.match(/^нет /)) {
        console.log('Discard last item command: ', val);
        this.$store.dispatch(REPLACE_LAST_ITEM, { text: val });
      } else {
        console.log('Add new item command: ', val);
        this.$store.commit(ADD_ITEM, { text: val });
      }
    }
  }
}
</script>
