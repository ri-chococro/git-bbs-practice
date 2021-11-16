import Vue from "vue";
import Vuex from "vuex";
import { Article } from "@/types/article";
import { Comment } from "@/types/comment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      new Article(3, "佐藤", "佐藤さんの記事", []),
      new Article(2, "⼭⽥", "⼭⽥さんの記事", [
        new Comment(13, "⼭崎", "⼭崎さんのコメント", 2),
      ]),
      new Article(1, "伊藤", "伊藤さんの記事", [
        new Comment(12, "鈴⽊", "鈴⽊さんのコメント", 1),
        new Comment(11, "吉⽥", "吉⽥さんのコメント", 1),
      ]),
    ],
  },
  mutations: {
    /**
     * 記事を追加する.
     *
     * @remarks 受け取ったpayload内のarticleをstateのarticlesの0番目に追加
     * @param state - Vuexのstateオブジェクト
     * @param payload - 新しい記事
     */
    addArticle(state, payload) {
      state.articles.unshift(
        new Article(payload.id, payload.name, payload.content, payload.comments)
      );
    },
    /**
     * 新規コメントをstateに格納する.
     *
     * @param state - stateを利用するための引数
     * @param payload - フォームにて入力されたコメント内容
     */
    addComment(state, payload) {
      for (const article of state.articles) {
        if (article.id == payload.comment.articleId) {
          article.commentList.unshift(payload.comment);
        }
      }
    },
    /**
     * 記事を削除する.
     *
     * @param state - Vuexのstateオブジェクト
     * @param payload - 削除する記事のID
     */
    deleteArticle(state, payload) {
      state.articles.splice(payload, 1);
    },
  },
  actions: {},
  getters: {
    /**
     * 投稿記事の情報を返す.
     *
     * @param state - stateを利用するための引数
     * @returns 投稿記事の情報
     */
    getArticles(state) {
      return state.articles;
    },
  },
  modules: {},
});
