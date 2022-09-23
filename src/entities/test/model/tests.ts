import { defineStore } from "pinia";

export const useTests = defineStore("tests", {
  state: () => ({
    tests: [
      {
        id: 0,
        name: 'Биология',
        questionCount: 44,
      },
      {
        id: 1,
        name: 'Математика',
        questionCount: 44,
      },
      {
        id: 2,
        name: 'История',
        questionCount: 44,
      },
      {
        id: 3,
        name: 'История',
        questionCount: 44,
      },
    ]
  }),
});
