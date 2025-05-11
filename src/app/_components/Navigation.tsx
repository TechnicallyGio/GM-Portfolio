import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <div className="navbar bg-base-100 rounded-2xl shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">MEDRANO</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-black uppercase">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
