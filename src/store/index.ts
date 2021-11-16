import { Article } from '@/types/article';
import { Comment } from '@/types/comment';
import Vue from "vue";
import Vuex from "vuex";

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
      console.log(state.articles);

    },
  },
  actions: {},
  getters: {

  },
  modules: {},
});
