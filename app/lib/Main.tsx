import * as React from "react";
import * as ReactDOM from "react-dom";
import AppRouter from "./POSE/Components/Routing/AppRouter";
import { initializeApp }from "firebase";

initializeApp({
    apiKey: "AIzaSyBU-yPF1zaFIVtAEzCSm4XH0d-IhODLVl4",
    authDomain: "pose-f6fc3.firebaseapp.com",
    databaseURL: "https://pose-f6fc3.firebaseio.com",
    storageBucket: "pose-f6fc3.appspot.com",
    messagingSenderId: "844645663415"
});

export default ReactDOM.render(
    (<AppRouter></AppRouter>),
    document.getElementById("sharing_container")
);