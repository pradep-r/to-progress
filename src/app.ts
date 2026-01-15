import "./styles/style.css";
import "./styles/test.scss";

const btn: HTMLElement|null = document.getElementById("myBtn");

const test: string = "Hello TypeScript";

const handler = () => {
  const user = {
    name: "Pradep",
    age: 25,
  };

  const greet = (user:any) => {
    console.log(`Hello ${user?.name ?? "Guest"}`);
  };

  greet(user);
};

btn?.addEventListener("click", handler);
