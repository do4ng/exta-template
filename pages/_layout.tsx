import { Link } from "exta/components";

export default function ({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/world">Greet to world!</Link>
        </li>
      </ul>

      {children}
    </>
  );
}
