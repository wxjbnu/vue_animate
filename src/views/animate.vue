<template>

  <div class="animate">
    <div ref="wrap" class="animate-wrap">
      <div class="animate-cont" ref="cont">
        <p class="animate-item" v-for="(o, i) in list"
          :key="i">{{o.id + '数据'}}</p>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'animatePage',
  data () {
    return {
      username: 'xxx',
      list: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
      ]
    }
  },
  methods: {
    userLogin() {
      let params = {}
      this.$store.dispatch('userLogin', { params }).then(data => {
        if (data.status == 200) {
        }
      })
    }
  },
  watch: {
    username(curVal, oldVal) {
      
    }
  },
  mounted() {
    const wrap = this.$refs.wrap
    const cont = this.$refs.cont
    console.log(wrap.offsetHeight, cont.offsetHeight, cont.offsetTop);
// cont.style.top = '-200px'
    // if () {
      const list = []
      const oldH = cont.offsetHeight
      let newH = 0
      if (cont.offsetHeight + cont.offsetTop  >= wrap.offsetHeight) {
        this.list.map((e) => {
          list.push(e)
        })
        list.map((e, i) => {
          list.push(e)
        })
      }
      list.map((e, i) => {
        if (i > this.list.length - 1) {
          this.list.push(e)
        }
      })
      
      console.log(list);
      
      console.log(this.list);
      console.log(this.$refs.cont);
      
      let newcont = this.$refs.cont
      newH = newcont.offsetHeight
      if (newcont.offsetHeight + cont.offsetTop  < wrap.offsetHeight) {
        return
      }
      const ss = setInterval(() => {
        console.log(cont.offsetHeight + cont.offsetTop, wrap.offsetHeight);
        // + wrap.offsetHeight
        if (newcont.offsetHeight   > wrap.offsetHeight) {
          cont.style.top = (cont.offsetTop - 1) + 'px'
          if (oldH + cont.offsetTop === 0 ) {
            cont.style.top = '0px'
            // clearInterval(ss)
            // console.log(cont.offsetTop, cont.offsetHeight, newcont.offsetHeight);
            console.log(oldH, newH, newcont.offsetHeight, cont.offsetTop);
            
          }
        } else {
          
        }
      }, 10);
    // }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.animate-item{
  margin: 0;
  width: 100%;
  padding: 10px 0;
  background: #42b983;
  &:nth-child(2n){
    background: #ba723b;
  }
}
.animate-wrap{
  height: 410px;
  position: relative;
  margin: 20px;
  border: 1px solid #eee;
  overflow: hidden;
}
.animate-cont{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // transition: all .01s;
}
</style>
