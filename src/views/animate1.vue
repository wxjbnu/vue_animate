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
  name: "animate1Page",
  data() {
    return {
      username: "xxx",
      list: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
      ]
    };
  },
  methods: {
    userLogin() {
      let params = {};
      this.$store.dispatch("userLogin", { params }).then(data => {
        if (data.status == 200) {
        }
      });
    }
  },
  watch: {
    username(curVal, oldVal) {}
  },
  mounted() {
    const wrap = this.$refs.wrap;
    const cont = this.$refs.cont;
    console.log(wrap.offsetWidth, cont.offsetWidth, cont.offsetLeft);
    // cont.style.top = '-200px'
    // if () {
    const list = []
    let oldW = cont.offsetWidth
    let newW = 0;
    cont.style.width = this.list.length * cont.children[0].offsetWidth + "px";
    oldW = cont.offsetWidth;
    if (cont.offsetWidth + cont.offsetLeft >= wrap.offsetWidth) {
      this.list.map(e => {
        list.push(e);
      });
      list.map((e, i) => {
        list.push(e);
      });
    }
    list.map((e, i) => {
      if (i > this.list.length - 1) {
        this.list.push(e);
      }
    });

    let newcont = this.$refs.cont;
    newW = newcont.offsetWidth;

    console.log(
      newcont.offsetWidth,
      cont.offsetLeft,
      newcont.offsetWidth + cont.offsetLeft,
      wrap.offsetWidth
    );
    console.log("---------------");
    console.log(oldW, cont.offsetLeft);

    if (newcont.offsetWidth + cont.offsetLeft < wrap.offsetWidth) {
      return;
    }
    // return
    const ss = setInterval(() => {
      console.log(cont.offsetWidth + cont.offsetLeft, wrap.offsetWidth);
      if (newcont.offsetWidth > wrap.offsetWidth) {
        cont.style.left = cont.offsetLeft - 1 + "px";
        // console.log(oldW , cont.offsetLeft);

        if (oldW + cont.offsetLeft === 0) {
          cont.style.left = "0px";
          // clearInterval(ss)
          // console.log(cont.offsetLeft, cont.offsetWidth, newcont.offsetWidth);
          console.log(oldW, newW, newcont.offsetWidth, cont.offsetLeft);
        }
      } else {
      }
    }, 10);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1,
h2 {
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
.animate-item {
  margin: 0;
  // width: 100%;
  flex: 0 0 50px;
  padding: 10px 0;
  background: #42b983;
  &:nth-child(2n) {
    background: #ba723b;
  }
}
.animate-wrap {
  height: 410px;
  width: 420px;
  position: relative;
  margin: 20px;
  border: 1px solid #eee;
  overflow: hidden;
}
.animate-cont {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // transition: all .01s;
}
</style>
