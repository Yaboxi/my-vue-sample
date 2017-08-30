var data = {
  text: `さんぷるてきすと`,
  title: 'Sample-text-generator',
  substr: '',
  length: '',
};

new Vue({
  el: '#app',
  data: data,
  methods: {
    showText: function() {
      this.substr = '';
      this.substr = this.text.replace(/\s+/g, "").substr(0, this.length);
    }
  }
});
