<style lang="scss" scoped>
  $thema-color: #0f88eb;
  $type-height: 59px;
  $boxmin-width: 1000px;
  @import url('../assets/css/base.scss');
  @import url('../assets/css/github-markdown.css');
  .context {
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
  .t-active {
    font-weight: 600;
    color: $thema-color;
  }
  .title-list {
    padding-left: 0;
    .title-item {
      margin-top: 16px;
      list-style: none;
      background: #fff;
      padding: 16px 20px;
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
<div class="context">
    <Header2 />
    <div class="main">
      <div class="main-center">
      <div class="type">
        <ul class="type-list">
          <li class="type-item t-active">JavaScript</li>
          <li class="type-item t-active">ES6</li>
          <li class="type-item">Vue</li>
          <li class="type-item t-active">React</li>
          <li class="type-item">Webpack</li>
          <li class="type-item">Angular2</li>
        </ul>
     </div>
     <ul class="title-list">
       <li
        class="title-item">
        <div class="t-type">来自分类: JavaScript</div>
        <div class="t-uinfo">
          <div class="t-img-g">
            <img src="../assets/img/avatar.jpg">
          </div>
          <span class="t-name">火骑士空空</span>
          <span class="t-motto">让多变成美的骏马，和你驰骋在天涯!!!</span>
        </div>
        <h3 class="t-title">{{article.title}}</h3>
        <div class="content markdown-body" v-html="article.content">
        </div>
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
      <div class="mr-a">我是中国人，我爱自己的祖国1111</div>
      <div class="mr-b"></div>
    </div>
    </div>
  </div>
</template>
<script>
import Header2 from './Header'
export default {
  components: {
    Header2
  },
  data () {
    return {
      id: null,
      article: {}
    }
  },
  created () {
    this.init()
    this.loadArticle()
  },
  methods: {
    init () {
      console.log(this)
      this.id = this.$route.params.id
    },
    loadArticle () {
      this.$axios.get('/api/articles/' + this.id).then(({data}) => {
        this.article = data.result
      })
    }
  }
}
</script>
