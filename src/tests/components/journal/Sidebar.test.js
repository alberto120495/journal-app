import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import Sidebar from "../../../components/journal/Sidebar";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({
  startLogout: jest.fn(),
}));
jest.mock("../../../actions/notes", () => ({
  startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "1",
    name: "Alberto",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    notes: [],
    active: null,
  },
};

let store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <Sidebar />
  </Provider>
);

describe("Pruebas en Sidebar", () => {
  test("debe de mostrarse correctamnete", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar el startLogout", () => {
    wrapper.find(".btn").simulate("click");
    expect(startLogout).toHaveBeenCalled();
  });

  test("debe de llamar el startNewNote", () => {
    wrapper.find(".journal__new-entry").simulate("click");
    expect(startNewNote).toHaveBeenCalled();
  });
});
