import {
  Questions,
  AppActions,
  ACTION_1,
  ACTION_2,
  ACTION_3,
  ACTION_4,
  ACTION_5,
  ACTION_6,
  ACTION_8,
  ACTION_9,
} from "./../../types/actions.types";

export function action_1(value: boolean): AppActions {
  return {
    type: ACTION_1,
    value: value,
  };
}

export function action_2(value: Questions[]): AppActions {
  return {
    type: ACTION_2,
    value: value,
  };
}

export function action_3(value: string): AppActions {
  return {
    type: ACTION_3,
    value: value,
  };
}

export function action_4(value: string): AppActions {
  return {
    type: ACTION_4,
    value: value,
  };
}

export function action_5(value: string[]): AppActions {
  return {
    type: ACTION_5,
    value: value,
  };
}

export function action_6(value: Questions[]): AppActions {
  return {
    type: ACTION_6,
    value: value,
  };
}

export function action_8(value: boolean): AppActions {
  return {
    type: ACTION_8,
    value: value,
  };
}

export function action_9(value: boolean): AppActions {
  return {
    type: ACTION_9,
    value: value,
  };
}
