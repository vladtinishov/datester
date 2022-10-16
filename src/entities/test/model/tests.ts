import { defineStore } from "pinia";
import { shuffle } from "shared/lib";
import { history } from "./history";
import { ikt } from "./ikt";
import { logic } from "./logic";
import { philosophy } from "./philosophy";

export const useTests = defineStore("tests", {
  state: () => ({
    questionIndex: 0,
    isFiltersDrawerOpen: false,
    testResult: [] as Array<{ index: number, result: boolean }>,
    tests: [
      {
        id: 0,
        name: 'История КЗ',
        questionCount: 504,
        questions: history
      },
      {
        id: 1,
        name: 'Философия',
        questionCount: 544,
        questions: philosophy
      },
      {
        id: 2,
        name: 'ИКТ',
        questionCount: 544,
        questions: ikt
      },
      {
        id: 3,
        name: 'Логика',
        questionCount: 544,
        questions: logic
      },
    ],
    test: {
      id: 0,
      name: 'История КЗ',
      questionCount: 504,
      questions: history
    },
    testQuestions: [] as { question: string, answers: Array<{ answer: string, isTrue: boolean }>}[],
  }),
  actions: {
    setTest(id: number) {
      const testData = this.tests.find(t => t.id == id)
      if (!testData) return;
      this.test = testData
    },
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
      this.questionIndex = 0;
      this.testQuestions = JSON.parse(JSON.stringify(this.test.questions));
      this.testQuestions.forEach(q => q.answers = shuffle(q.answers))
      this.testQuestions = shuffle(this.testQuestions);
    },
    setQuestionsByFilters(filters: { range: { start: number, end: number } }) {
      this.testResult = [];
      this.questionIndex = 0;
      const { start, end } = filters.range;
      this.testQuestions = shuffle(this.test.questions.slice(start ? start - 1 : 0, end));
      this.testQuestions.forEach(q => q.answers = shuffle(q.answers))
    },
    toNextQuestion() {
      if (this.questionIndex < this.testQuestions.length - 1) this.questionIndex += 1;
    },
    toPrevQuestion() {
      if (this.questionIndex > 0) this.questionIndex -= 1;
    }
  }
});
