<template>
  <el-input v-model="q" clearable autofocus>
    <button :class="{'speech-toggle':true, active: isSpeechRunning}" @click="speechToggle" slot="suffix">
      <icon v-if="recognition" name="microphone" class="el-icon-speech el-input__icon"></icon>
    </button>
  </el-input>
</template>

<style lang="scss">
.speech-toggle {
  cursor: pointer;
  border: none;
  background: none;
  padding: 6px 0;
  width: 30px;
  height: 100%;
  color: #dcdfe6;
  outline: none;

  &:hover {
    color: #666;
  }
  &.active {
    color: #409eff;
  }
}
</style>

<script>
import 'vue-awesome/icons/microphone';
export default {
  props: {
    value: {
      default: ''
    }
  },

  data() {
    return {
      lang: 'ru-RU',
      q: this.value,
      recognition: false,
      isSpeechRunning: false,
      runtimeTranscription: '',
      transcription: []
    };
  },

  watch: {
    value(val) {
      this.q = val;
    },

    q(val) {
      this.$emit('input', val); // TODO: only on speech
    }
  },

  methods: {
    speechStart() {
      console.log('speech start');
      if (!this.recognition) return;
      this.recognition.start();
      this.isSpeechRunning = true;
    },

    speechStop() {
      if (this.recognition) this.recognition.stop();
      this.isSpeechRunning = false;
    },

    speechToggle() {
      return this.isSpeechRunning ? this.speechStop() : this.speechStart();
    },

    onSpeechEnd() {
      console.log('speech end', this.runtimeTranscription);
      this.speechStop();
      if (!this.runtimeTranscription) return;

      this.transcription.push(this.runtimeTranscription);
      // this.q = this.runtimeTranscription;

      this.$emit('speechInput', this.runtimeTranscription);
      this.speechStart();
    },

    checkSpeechApi() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        return;
      }
      this.recognition = new SpeechRecognition();
      let recognition = this.recognition;
      this.speechStop();
      recognition.lang = this.lang;
      recognition.interimResults = true;
      recognition.addEventListener('result', event => {
        // console.log("speech result", event.results);
        const text = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        this.runtimeTranscription = text;
      });
      recognition.addEventListener('end', this.onSpeechEnd);
      this.recognition = recognition;
    }
  },

  mounted() {
    this.checkSpeechApi();
  }
};
</script>
