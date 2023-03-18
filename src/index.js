"use strict";

// Nos traemos los objetos V

const { app, BrowserWindow } = require("electron");

app.on(`before-quit`, () => {
  console.log("apunto de salir");
});

app.on(`ready`, () => {
  let win = new BrowserWindow({
    width: 500,
    height: 500,
    title: "Administracion Estacionamiento",
    maximizable: true,
    center: true,
    show: true,
    backgroundColor: "#2e2c29",
  });

  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.on("move", () => {
    const position = win.getPosition();
    console.log(`la posicion de mi ventana es ${position}`);
  });

  win.loadURL(`file://${__dirname}/index.html`);
});
