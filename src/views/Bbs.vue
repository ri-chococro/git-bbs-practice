<template>
  <div>
    <label for="articleName">投稿者名：</label><br />
    <input type="text" id="articleName" v-model="articleName" /><br />
    <label for="articleContent">投稿内容：</label>
    <br />
    <textarea id="articleContent" v-model="articleContent" rows="8" />
    <br />
    <button v-on:click="addArticle">記事投稿</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bbs extends Vue {
  // 投稿者名
  private articleName = "";
  // 投稿内容
  private articleContent = "";

  /**
   * 記事を追加する.
   */
  addArticle(): void {
    let newId: number;
    if (this.$store.getters.getArticles.length === 0) {
      newId = 1;
    } else {
      newId = this.$store.getters.getArticles[0].id + 1;
    }
    this.$store.commit("addArticle", {
      id: newId,
      name: this.articleName,
      content: this.articleContent,
      comments: [],
    });
    this.articleName = "";
    this.articleContent = "";
  }
}
</script>

<style></style>
