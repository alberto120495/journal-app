import { login, logout, startLogout } from "../../actions/auth";
import { types } from "../../types/types";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import createMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("Pruebas con las acciones de Auth", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("login y logout deben de crear la accion respectiva", () => {
    const uid = "ABC";
    const displayName = "Alberto";
    const loginAction = login(uid, displayName);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });

    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  /*  test("debe de realizar el startlogout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.logout,
    });
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  test("debe de iniciar el startLoginEmailPassword", async () => {
    await store.dispatch("test@testing.com", "123456");
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.login,
      payload: {
        uid: "BfjhPi7oo7S5nHjOJWiQreU7Nfq2",
        displayName: null,
      },
    });
    console.log(actions);
  }); */
});
