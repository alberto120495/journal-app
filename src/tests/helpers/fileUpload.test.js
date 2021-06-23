import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "dgpaplcae",
  api_key: "752936927586297",
  api_secret: "dbESqXLCaRPzqXPU0S7Z0_w517k",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  /* test("debe de cargar una archivo y retornar el URL", async () => {
    const resp = await fetch(
      "https://images-na.ssl-images-amazon.com/images/I/51vNlrabrGL._AC_.jpg"
    );
    const blob = await resp.blob();

    const file = new File([blob], "foto.png");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    //Borrar imagen por ID
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");

    cloudinary.v2.api.delete_resources(imageId, {}, async (done) => {
      await new Promise((resolve) => resolve());
      done();
    });

    //console.log(url);
  }); */
  test("debe de retirnar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);

    //console.log(url);
  });
});
