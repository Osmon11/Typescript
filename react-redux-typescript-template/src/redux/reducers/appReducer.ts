import {
  ACTION_1,
  ACTION_2,
  ACTION_3,
  ACTION_4,
  ACTION_5,
  ACTION_6,
  ACTION_8,
  ACTION_9,
  ExpenseActionTypes,
} from "../../types/actions.types";

interface DefaultState {
  admin: {
    auth: boolean;
  };
  alph: string[];
  questions: { ans: string; que: string }[];
  que: string;
  ans: string;
  arr: string[];
  isNext: boolean;
  queUpdated: boolean;
}

const initialState: DefaultState = {
  admin: {
    auth: false,
  },
  alph: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  questions: [
    {
      ans: "React",
      que:
        "JavaScript-библиотека с открытым исходным кодом, разработанная Facebook для создания сложных интерактивных пользовательских интерфейсов в приложениях.",
    },
    {
      ans: "JSON",
      que: "Текстовый формат обмена данными, основанный на JavaScript.",
    },
    {
      ans: "Flux",
      que:
        "Архитектурный шаблон, который обеспечивает однонаправленный поток данных.",
    },
    {
      ans: "State",
      que:
        "Объект, который содержит данные и определяет, как компонент отображается и ведет себя.",
    },
    {
      ans: "Redux",
      que:
        "Контейнер с предсказуемым состоянием для приложений JavaScript, основанный на шаблоне проектирования Flux.",
    },
  ],
  que: "",
  ans: "",
  arr: [],
  isNext: false,
  queUpdated: false,
};

export const reload = initialState.questions;

export function reducer(
  state: DefaultState = initialState,
  action: ExpenseActionTypes
): DefaultState {
  switch (action.type) {
    case ACTION_1:
      return {
        ...state,
        admin: {
          auth: action.value,
        },
      };

    case ACTION_2:
      return {
        ...state,
        questions: action.value,
      };

    case ACTION_3:
      return {
        ...state,
        que: action.value,
      };

    case ACTION_4:
      return {
        ...state,
        ans: action.value,
      };

    case ACTION_5:
      return {
        ...state,
        arr: action.value,
      };

    case ACTION_6:
      return {
        ...state,
        questions: action.value,
      };
    case ACTION_8:
      return {
        ...state,
        isNext: action.value,
      };
    case ACTION_9:
      return {
        ...state,
        queUpdated: action.value,
      };
    default:
      return state;
  }
}
