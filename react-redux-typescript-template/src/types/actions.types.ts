export const ACTION_1 = "ACTION_1";
export const ACTION_2 = "ACTION_2";
export const ACTION_3 = "ACTION_3";
export const ACTION_4 = "ACTION_4";
export const ACTION_5 = "ACTION_5";
export const ACTION_6 = "ACTION_6";
export const ACTION_8 = "ACTION_8";
export const ACTION_9 = "ACTION_9";

export interface Action1 {
  type: typeof ACTION_1;
  value: boolean;
}

export interface Action2 {
  type: typeof ACTION_2;
  value: Questions[];
}

export interface Action3 {
  type: typeof ACTION_3;
  value: string;
}

export interface Action4 {
  type: typeof ACTION_4;
  value: string;
}

export interface Action5 {
  type: typeof ACTION_5;
  value: string[];
}

export interface Action6 {
  type: typeof ACTION_6;
  value: Questions[];
}

export interface Action8 {
  type: typeof ACTION_8;
  value: boolean;
}

export interface Action9 {
  type: typeof ACTION_9;
  value: boolean;
}

export type Questions = {
  ans: string;
  que: string;
};

export type ExpenseActionTypes =
  | Action1
  | Action2
  | Action3
  | Action4
  | Action5
  | Action6
  | Action8
  | Action9;

export type AppActions = ExpenseActionTypes;
