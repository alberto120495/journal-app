import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import AppRouter from "../../routers/AppRouter";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { login } from "../../actions/auth";
import { act } from "react-dom/test-utils";
import { firebase } from "../../firebase/firebase-config";

jest.mock("../../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    notes: [],
    active: {
      id: "abc",
    },
  },
};

let store = mockStore(initState);

store.dispatch = jest.fn();

describe("Pruebas en <AppRouter/>", () => {
  test("debe de llamar el login si estoy autenticado", async () => {
    let usuario;

    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword("test@testing.com", "123456");
      usuario = userCred.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );

      expect(login).toHaveBeenCalled();
    });
  });
});
