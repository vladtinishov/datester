import { defineStore } from "pinia";

export const useHeader = defineStore("header", {
  state: () => ({
    header: 'Главная'
  }),
  actions: {
    setHeader(header: string) {
      this.header = header
    }
  }
});
