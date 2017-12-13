<style lang="scss" scoped>
  $thema-color: #0f88eb;
  $type-height: 59px;
  $boxmin-width: 1000px;
  .header {
    height: 52px;
  }
  .h-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    right: 0;
    width: 100%;
    // min-width: 1032px;
    // overflow: hidden;
    // min-width: 1000px;
    box-sizing: border-box;
    box-shadow: 1px 1px 3px #ccc;
    background: #fff;
    .h-content {
      position: relative;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      width: $boxmin-width;
      height: 52px;
      margin: 0 auto;
      // padding: 0 16px;
    }
    .h-logo {
      font-size: 24px;
      color: $thema-color;
    }
    nav {
      margin: 0 16px;
      color: #8590a6;
      a {
        margin: 0 8px;
      }
    }
    .search-bar {
      width: 250px;
      position: relative;
      padding: 8px 8px;
      border: 1px solid #e8edf5;
      background: #f7f8fa;
      border-radius: 4px;
      overflow: hidden;
      font-size: 14px;
      form {
        display: flex;
        input {
          border: none;
          outline: none;
          background: #f7f8fa;
          &.active {
            background: #fff;
          }
        }
        button {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40px;
          border: none;
          outline: none;
          background: $thema-color;
          border-radius: 0;
          // box-sizing: border-box;
        }
      }
      &.active {
        background: #fff;
      }
    }
    .search-q {
      outline: none;
    }
    .h-userinfo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .h-sign {
        .h-in, .h-join {
          border: none;
          outline: none;
          font-size: 14px;
          cursor: pointer;
          padding: 8px 16px;
          border: 1px solid $thema-color;
        }
        .h-in {
          
          color: $thema-color;
          &:hover {
            background: #eef5f9;
          }
        }
        .h-join {
          margin-left: 8px;
          background: $thema-color;
          color: #fff;
          &:hover {
            background:#067ddf;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="header">
      <header ref="header"  class="h-header">
        <div class="h-content" :style="{left: left + 'px'}">
          <div class="h-logo">火骑士空空</div>
          <nav>
            <a>首页</a>
            <a>发现</a>
            <a>话题</a>
          </nav>
          <div class="search-bar">
            <form>
              <input class="search-q" placeholder="搜索你想要的宝藏"/>
              <button>🔍</button>
            </form>
          </div>
          <div class="h-userinfo">
            <div class="h-sign">
              <button class="h-in">登陆</button>
              <button class="h-join">加入我们</button>
            </div>
          </div>
        </div>
      </header>
    </div>
</template>
<script>
export default {
  data () {
    return {
      left: 0
    }
  },
  mounted () {
    window.onscroll = (e) => {
      const topLeft = document.body.scrollLeft || document.documentElement.scrollLeft
      this.left = -topLeft
    }
  }
}
</script>
