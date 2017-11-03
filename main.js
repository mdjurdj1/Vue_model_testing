var vm = new Vue({
  el: '#first',
  data: {
    message: "THIS IS MY VUE!",
    headersList: [
      {header: "READ ALL ABOUT IT", id: 1},
      {header: "STOOP KID SCARED TO LEAVE HIS STOOP", id:2},
      {header: "Okay I'll stop now...", id:3}
    ],
    isActive: true
  },
  computed: {
    modifyData: function() {
      return this.headersList.map(i => i.header += "!!!")
    },
    reverseHeader: function() {
      return this.message.split(' ').map(i => i += ".").join("")
    },
  },
  methods: {
    turnFalse: function() {
      console.log('heh')
      this.isActive ? this.isActive = false : this.isActive = true
    }
  },
  created: function() {
    if(typeof this === "objectz") {
      document.body.style.backgroundColor = "red";
      throw new Error('ERROR! THIS is an object!')
    } else {
      document.body.style.backgroundColor = "yellow";
      alert('SUCCESS!')
    }
  }
})

Vue.component('content-list', {
  props: ['content'],
  template: '<li>{{content.header}}</li>'
})
