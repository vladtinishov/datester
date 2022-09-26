import { defineStore } from "pinia";

export const useTests = defineStore("tests", {
  state: () => ({
    isFiltersDrawerOpen: false,
    testResult: [] as Array<{ index: number, result: boolean }>,
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
    ],
    test: {
      name: 'Биология',
      questions: [
        {
          question: 'Кто был им?',
          answers: [
            { answer: 'Он', isTrue: true },
            { answer: 'Она', isTrue: false },
            { answer: 'Они', isTrue: false },
            { answer: 'Оно', isTrue: false },
          ]
        },
        {
          question: 'Кто был ею?',
          answers: [
            { answer: 'Он', isTrue: false },
            { answer: 'Она', isTrue: true },
            { answer: 'Они', isTrue: false },
            { answer: 'Оно', isTrue: false },
          ]
        },
        {
          question: 'Кто был оно?',
          answers: [
            { answer: 'Он', isTrue: false },
            { answer: 'Она', isTrue: false },
            { answer: 'Они', isTrue: false },
            { answer: 'Оно', isTrue: true },
          ]
        },
      ]
    }
  }),
  actions: {
    openFiltersDrawer() {
      this.isFiltersDrawerOpen = true;
    },
    closeFiltersDrawer() {
      this.isFiltersDrawerOpen = false;
    },
    setAnswerResult(index: number, result: boolean) {
      if (!this.testResult.find(r => r.index == index)) {
        this.testResult.push({ index, result })
      }
    }
  }
});
