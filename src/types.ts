/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MultipleResponseQuestion {
  id: number;
  type: 'complex'; // Pilihan Ganda Kompleks (multiple choices correct)
  stimulus: string;
  questionText: string;
  options: string[];
  correctAnswers: number[]; // index of correct options
  difficulty: 'mudah' | 'sedang' | 'sulit';
}

export interface SingleChoiceQuestion {
  id: number;
  type: 'single'; // Pilihan Ganda biasa
  stimulus: string;
  questionText: string;
  options: string[];
  correctAnswer: number; // index of correct option
  difficulty: 'mudah' | 'sedang' | 'sulit';
}

export interface TrueFalseStatement {
  id: number;
  statementText: string;
  correctIsTrue: boolean; // true for Benar, false for Salah
}

export interface TrueFalseQuestion {
  id: number;
  type: 'true_false'; // Benar Salah (3 statements)
  stimulus: string;
  questionText: string;
  statements: TrueFalseStatement[];
  difficulty: 'mudah' | 'sedang' | 'sulit';
}

export interface MatchingPair {
  id: number;
  leftText: string;
  rightText: string; // correct match
}

export interface MatchingQuestion {
  id: number;
  type: 'matching'; // Menjodohkan
  stimulus: string;
  questionText: string;
  pairs: MatchingPair[];
  allRightOptions: string[]; // Shuffled matching options for columns
  difficulty: 'mudah' | 'sedang' | 'sulit';
}

export type Question = SingleChoiceQuestion | MultipleResponseQuestion | TrueFalseQuestion | MatchingQuestion;

export interface UserSession {
  nama: string;
  kelas: string;
  startTime: string;
}

export interface QuizProgress {
  answered: Record<number, any>; // id mapped to user answer
  flagged: Record<number, boolean>; // id mapped to "ragu-ragu" status
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  flaggedCount: number;
  score: number;
}
