<template>
  <div>
    <label for="articleName">投稿者名：</label><br />
    <input type="text" id="articleName" v-model="articleName" /><br />
    <label for="articleContent">投稿内容：</label>
    <br />
    <textarea id="articleContent" v-model="articleContent" rows="8" />
    <br />
    <button v-on:click="addArticle">記事投稿</button>

    <div class="bbs">
      <div v-for="article of currentArticleList" v-bind:key="article.id">
        <hr />
        <div>投稿者名：{{ article.name }}</div>
        <div>投稿内容：</div>
        <pre><div>{{ article.content }}</div></pre>
        <div v-for="comment of article.commentList" :key="comment.id">
          <div>コメント者名：{{ comment.name }}</div>
          <div>コメント内容：</div>
          <pre class="bg-pink-100 p-5 rounded-sm">{{ comment.content }}</pre>
        </div>
        <CompCommentForm v-bind:article-id="article.id"></CompCommentForm>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompCommentForm from "@/components/CompCommentForm.vue";

@Component({
  components: {
    CompCommentForm,
  },
})
export default class Bbs extends Vue {
  // 最新の投稿記事一覧
  private currentArticleList = [];
  // 投稿者名
  private articleName = "";
  // 投稿内容
  private articleContent = "";

  /**
   * Vuexストア内の投稿記事の情報を取得しcurrentArticleListに格納する.
   */
  created() {
    this.currentArticleList = this["$store"].getters.getArticles;
  }
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
