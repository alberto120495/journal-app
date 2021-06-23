import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en el authReducer", () => {
  test("debe de realizar el login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: 1234,
        displayName: "alberto",
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: 1234,
      name: "alberto",
    });
  });

  test("debe de realizar el logout", () => {
    const initState = {
      uid: 1234,
      name: "alberto",
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });
  test("debe regresar el mismo state", () => {
    const initState = {
      uid: 1234,
      name: "alberto",
    };
    const action = {
      type: types.logouta,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
