import isProjectLatest from "../helpers/isProjectLatest";
export function rightArrow() {
  return function (dispatch, getState) {
    const state = getState();

    if (state.slider.index < isProjectLatest().length - 1) {
      dispatch({
        type: "RIGHT_ARROW",
        index: state.slider.index + 1,
      });
    }
  };
}
