import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";

jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return "https://hola-mundo/cosa.jpg";
    //return Promise.resolve("https://hola-mundo/cosa.jpg");
  }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "woMydlGF5u2ZpI7MvabS",
      title: "Hola",
      body: "Mundo",
    },
  },
};

let store = mockStore(initState);

describe("Pruebas con las acciones de notes", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("debe de crear una nota startNewNote", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        body: "",
        date: expect.any(Number),
        id: expect.any(String),
        title: "",
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        body: "",
        date: expect.any(Number),
        id: expect.any(String),
        title: "",
      },
    });

    //Eliminar notas de la base de datos
    const docId = actions[0].payload.id;
    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
  });
  /* 
  test("starLoadingnotes debe cargar las notas", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test("startSaveNote debe de actualizar la nota", async () => {
    const note = {
      id: "woMydlGF5u2ZpI7MvabS",
      title: "titulo",
      body: "cuerpo",
    };

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);
    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  }); 

  test("startUploading debe de actualizar el url del entry", async () => {
    const file = new File([], "foto.jpg");
    await store.dispatch(startUploading(file));
    const docRef = await db
      .doc("/TESTING/journal/notes/woMydlGF5u2ZpI7MvabS")
      .get();

    expect(docRef.data().url).toBe("https://hola-mundo/cosa.jpg");
  });
  */
});
