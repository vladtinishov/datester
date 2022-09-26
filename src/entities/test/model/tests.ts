import { defineStore } from "pinia";
import { shuffle } from "shared/lib";
import { history } from "./history";

export const useTests = defineStore("tests", {
  state: () => ({
    isFiltersDrawerOpen: false,
    testResult: [] as Array<{ index: number, result: boolean }>,
    tests: [
      {
        id: 0,
        name: 'История КЗ',
        questionCount: 504,
      },
    ],
    test: {
      name: 'История КЗ',
      questions: history
    },
    testQuestions: [] as { question: string, answers: Array<{ answer: string, isTrue: boolean }>}[],
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
    },
    initQuestions() {
      this.testQuestions = this.test.questions;
      this.testQuestions.forEach(q => q.answers = shuffle(q.answers))
      this.testQuestions = shuffle(this.testQuestions);
    },
    setQuestionsByFilters(filters: { range: { start: number, end: number } }) {
      const { start, end } = filters.range;
      this.testQuestions = this.test.questions.slice(start ? start - 1 : 0, end);
    }
  }
});
