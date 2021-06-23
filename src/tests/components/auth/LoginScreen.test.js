import { mount } from "enzyme";
import { Provider } from "react-redux";
import LoginScreen from "../../../components/auth/LoginScreen";

import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import createMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en <LoginScreen/>", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("debe renderizar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la accion de startGoogleLogin", () => {
    wrapper.find(".google-btn").simulate("click");

    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("debe de disparar el startLogin con los respectivos argumentos", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });

    expect(startLoginEmailPassword).toHaveBeenCalledWith("", "");
  });
});
