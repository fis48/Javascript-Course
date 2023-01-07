// Ejercicio 1
let iniObj = {
  name: "Fidel",
  age: 48,
  profession: "Fullstack developer"
}
console.log("Ejecicio 1:", Object.keys(iniObj));


// Ejercicio 2
console.log("Ejercicio 2");
console.log("1. En el contexto global el valor de 'this' es el objeto window:", this);

function thisFunc() {
  return this;
}
console.log("2. En el contexto de una función el valor de 'this' es el objeto window:", thisFunc());

function thisFunc2() {
  "use strict"
  return this;
}
console.log("3. En el contexto de una función, usando modo estricto el valor de 'this' es undefined:", thisFunc2());
console.log("4. En el contexto de un método, el valor de 'this' es el objeto `propietario:");
let ownerObj = {
  name: "Fidel inside method.",
  objMethod() {
    console.log(this);
  }
}
ownerObj.objMethod();

console.log("5. En un método usando arrow functions, el valor de 'this' es el contexto global:");
let arrowObj = {
  name: "Fidel arrow",
  arrowFunc: () => {
    console.log("Name from arrow function method:", this.name);
  }
}
arrowObj.arrowFunc();

function eventFunc (thisInEvent) {
  console.log("6. En un evento, el valor de this es el elemento que recibe el evento:", thisInEvent);
}

// Ejercicio 3
class InvertirCadena {
  constructor(cadena) {
    this.cadenaInvertir = cadena;
  }
  cadenaInvertir = "";

  invertir = () => {
    if (this?.cadenaInvertir === "") {
      throw new Error("Error: No se puede invertir una cadena vacía.");
    }
    else if (this?.cadenaInvertir === undefined) {
      throw new Error("Error: No se puede invertir una cadena que no se ha definido.");
    }
    else {
      console.log("Cadena invertida:", this?.cadenaInvertir.split("").reverse().join(""));
    }
  }
}

// let invertirCadena = new InvertirCadena();
// let invertirCadena = new InvertirCadena("");
let invertirCadena = new InvertirCadena("Hola Mundo");
invertirCadena.invertir();


// Ejercicio 4
class userLogin {
  constructor(user, pass) {
    this.username = user;
    this.password = pass;
  }

  login = () => {
    if (this.username !== "admin" || this.password !== "passwd") {
      alert("El nombre de usuario o la contraseña son incorrectos.")
    }
    else {
      alert("Usuario logeado.");
    }
  }
}

// Ejercicio 5
let successBtn = document.querySelector("#loginSuccess");
let failureBtn = document.querySelector("#loginFailure");
successBtn.addEventListener("click", () => {
  let loginAttempt = new userLogin("admin", "passwd");
  loginAttempt.login();
});
failureBtn.addEventListener("click", () => {
  let loginAttempt = new userLogin("---", "---");
  loginAttempt.login();
});


// Ejercicio 6
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

let successBtnAsync = document.querySelector("#loginSuccessAsync");
successBtnAsync.addEventListener("click", async () => {
  let result = await loginWitUsername("admin" ,"passwd");
  console.log(result);
});

let failureBtnAsync = document.querySelector("#loginFailureAsync");
failureBtnAsync.addEventListener("click", async () => {
  try {
    let result = await loginWitUsername("---" ,"---");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
