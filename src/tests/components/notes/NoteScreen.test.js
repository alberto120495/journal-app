import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { activeNote } from "../../../actions/notes";
import NoteScreen from "../../../components/notes/NoteScreen";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
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
    active: {
      id: 1234,
      title: "Hola",
      body: "Mundo",
      date: 0,
    },
  },
};

let store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <NoteScreen />
  </Provider>
);

describe("Pruebas en <NoteScreen/>", () => {
  test("debe de msotrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de disparar el active note", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Hola de nuevo",
      },
    });

    expect(activeNote).toHaveBeenCalled();
  });
});
