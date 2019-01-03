/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

 import Vue from 'vue/dist/vue.esm'

 const app = new Vue({
    el: '#hello',
    data: {
      message: "Can you say hello?"
    }
 })

new Vue({
  el: '#app',
  data: {
    counter: 0,
    list: ['Apple', 'Banana', 'Strawberry']
  },
  computed: {
    length: function() {
      return this.list.length
    }
  },
  methods: {
    addItem: function() {
      this.list.push('Orange' + (++this.counter).toString())
    }
  }
})

