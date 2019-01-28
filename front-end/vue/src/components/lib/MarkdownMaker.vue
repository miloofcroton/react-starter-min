<template>
  <div :class="$style.vueMarkdown" v-html="html" />
</template>

<script>
import marked from 'marked';

marked.setOptions(
  {
    renderer:    new marked.Renderer(),
    gfm:         true,
    tables:      true,
    breaks:      true,
    pedantic:    false,
    sanitize:    false,
    smartLists:  true,
    smartypants: false,
    xhtml:       false,
  },
);

export default {
  data() {
    return {
      html: '',
    };
  },
  methods: {
    createHTML() {
      let text = '';

      this.$slots.default.forEach((slot) => {
        slot.text = slot.text.trim().replace(/\n /g, '\n');
        text += `${slot.text}\n`;
      });

      this.html = (marked)(text);
    },
  },
  created() {
    this.createHTML();
  },
  beforeMount() {
    this.createHTML();
  },
};
</script>

<style lang="postcss" module>
  .vueMarkdown {
    display: block;
    text-align: left;

  }
</style>
