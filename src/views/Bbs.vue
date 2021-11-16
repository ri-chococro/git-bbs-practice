<template>
  <div class="bbs">
    <div v-for="article of currentArticleList" v-bind:key="article.id">
      <div>投稿者名：{{ article.name }}</div>
      <div>投稿内容：</div>
      <pre><div>{{ article.content }}</div></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bbs extends Vue {
  // 最新の投稿記事一覧
  private currentArticleList = [];

  /**
   * Vuexストア内の投稿記事の情報を取得しcurrentArticleListに格納する.
   */
  created() {
    this.currentArticleList = this["$store"].getters.getArticles;
  }
}
</script>

<style></style>
