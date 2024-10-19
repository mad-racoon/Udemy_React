import logoImg from "../assets/logo.jpg";

import Button from "./UI/Button.jsx";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="3 cups and napkin on a plate" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
}
