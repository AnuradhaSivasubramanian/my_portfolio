export function leftArrow() {
  return function (dispatch, getState) {
    const state = getState();
    if (state.slider.index > 0) {
      dispatch({
        type: "LEFT_ARROW",
        index: state.slider.index - 1,
      });
    }
  };
}
