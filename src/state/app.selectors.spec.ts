import { mockChars } from "../utils/marvel-test.utils";
import { IApp, IAppState } from "./app.interface";
import { initialAppState } from "./app.reducer";
import * as fromAppSelectors from "./app.selectors";

describe("AppSelectors", () => {
  const initialState: IAppState = {
    AppState: {
      ...initialAppState,
      charList: {
        ...initialAppState.charList,
        entities: mockChars,
      },
      selectedList: {
        ...initialAppState.selectedList,
        entities: mockChars,
      },
    },
  };
  const getAppState = (state: IAppState): IApp => state.AppState;

  it("should select all characters", () => {
    const result = fromAppSelectors.selectAllCharacters.projector(
      getAppState(initialState)
    );

    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(mockChars[0].id);
  });

  it("should select selected characters", () => {
    const result = fromAppSelectors.selectSelectedCharacters.projector(
      getAppState(initialState)
    );

    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual(mockChars[0].id);
  });
});
