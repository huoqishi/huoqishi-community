<style lang="scss" scoped>
  $thema-color: #0f88eb;
  $type-height: 59px;
  $boxmin-width: 1000px;
  @import url('../assets/css/base.scss');
  .home {
    .main {
      display: flex;
      justify-content: flex-stretch;
      margin: 0 auto;
      width: $boxmin-width;
      padding-top: 16px;
    }
  }
  .type {
    .type-list {
      margin-top: 0;
      display: flex;
      align-items: 'flex-start';
      justify-content: 'center';
      height: $type-height;
      padding-left: 0;
      background: #fff;
      .type-item {
        margin: 0 12px;
        list-style: none;
        line-height: $type-height;
        cursor: pointer;
        &:hover {
          color: #becedc;
        }
      }
    }
  }
  .title-list {
    padding-left: 0;
    .title-item {
      margin-top: 16px;
      list-style: none;
      background: #fff;
      padding: 16px;
      .t-type {
        color: #8590a6;
        font-size: 16px;
      }
      .t-uinfo {
        margin-top: 16px;
        display: flex;
        align-items: center;
        .t-img-g {
          width: 24px;
          height: 24px;
          overflow: hidden;
          img {
            width: 100%;
            cursor: pointer;
          }
        }
        .t-name {
          margin: 0 8px;
          font-weight: 900;
        }
        .t-motto {
          color: #666;
          font-size: 14px;
        }
      }
      .t-title {
        cursor: pointer;
        margin: 16px 0;
        &:hover {
          color: #175199;
        }
      }
      .t-summary {
        display: flex;
        .t-cover {
          margin-right: 16px;
          width: 190px;
          height: 100px;
          overflow: hidden;
          img {
            width: 100%;
            cursor: pointer;
          }
        }
        .t-inner {
          flex: 1;
          font-size: 15px;
          height: 100px;
          color: #262626;
          overflow: hidden;
          cursor: pointer;
          .t-text {
            
            line-height: 24px;
          }
          &:hover {
            color: #6f6f6f;
          }
        }
      }
    }
  }
  .main-center {
    margin-right: 16px;
    flex: 1;
  }
  .main-right {
    width: 290px;
    .mr-a {
      height: 240px;
      background: #fff;
    }
    .mr-b {
      margin-top: 16px;
      height: 780px;
      background: #fff;
    }
  }
  .tool-bar {
    
  }
  .tb-list {
    margin-top: 16px;
    padding: 0;
    display: flex;
    color: #8590a6;
    list-style: none;
  }
  .tb-item {
    margin-right: 8px;
  }
</style>
<template>
  <div class="home">
    <Header2 />
    <div class="main">
      <div class="main-center">
      <div class="type">
        <ul class="type-list">
          <li class="type-item">JavaScript</li>
          <li class="type-item">Vue</li>
          <li class="type-item">React</li>
          <li class="type-item">Webpack</li>
          <li class="type-item">Angular2</li>
          <li class="type-item">ES6</li>
        </ul>
     </div>
     <ul class="title-list">
       <li
        v-for="item in list"
        :key="item.id"
        class="title-item">
        <div class="t-type">来自分类: JavaScript</div>
        <div class="t-uinfo">
          <div class="t-img-g">
            <img src="../assets/img/avatar.jpg">
          </div>
          <span class="t-name">火骑士空空</span>
          <span class="t-motto">让多变成美的骏马，和你驰骋在天涯!!!</span>
        </div>
        <router-link :to="{name: 'articles', params: {id: item.id}}">
          <h3 class="t-title">{{item.title}}</h3>
          <div class="t-summary">
              <div class="t-cover">
                <img src="../assets/img/tmp.jpg"/>
              </div>
              <div class="t-inner">
                  <span class="t-text"><div v-html="item.content"></div><a>阅读全文</a></span>
              </div>
          </div>
        </router-link>
        <div class="tool-bar">
          <ul class="tb-list">
            <li class="tb-item">阅读(199)</li>
            <li class="tb-item">查看评论(98)</li>
          </ul>
        </div>
        </li>
     </ul>
    </div>
    <div class="main-right">
      <div class="mr-a"></div>
      <div class="mr-b"></div>
    </div>
    </div>
  </div>
</template>
<script>
import Header2 from './Header'
console.log(123)
export default {
  components: {
    Header2
  },
  data () {
    return {
      left: 0,
      list: [],
      page: 0, // 当前是第几页
      total: null // 共多少条数据

    }
  },
  created () {
    this.loadList()
  },
  mounted () {
    // 顶部条滚动问题
    window.onscroll = (e) => {
      const topLeft = document.body.scrollLeft || document.documentElement.scrollLeft
      this.left = -topLeft
    }
  },
  methods: {
    loadList () {
      this.$axios.get('/api/articles').then(({data}) => {
        this.list = data.result
      })
    }
  }
}
</script>