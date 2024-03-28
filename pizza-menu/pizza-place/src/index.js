import React from "react";
import ReactDOM from "react-dom/client";

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="404" />
      <h2> Pizza Spinaci</h2>
      <h4>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</h4>
    </div>
  );
}

function Header() {
  return <h1> Fast React Pizza Company </h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu:</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  //return React.createElement("footer", null, "We're currently Open!"); -> the way to do it w/o JSX
  /* With JSX ->*/
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour; // here is an example of using short circuiting for bool value
  console.log(isOpen);

  /*   if (hour >= openHour && hour <= closeHour) {
    alert("We are currently open");
  } else alert("Sorry we are closed "); */

  return (
    <footer>{new Date().toLocaleTimeString()}: We're Currently Open!</footer>
  );
}

//this is the main render component, where all the components will be placed
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Footer />
  </React.StrictMode>
);
