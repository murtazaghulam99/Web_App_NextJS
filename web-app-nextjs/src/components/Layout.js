import Nav from "./Nav";
import '../styles/globals.css';

export default function Layout({ children }) {
    return (
        <div>
          <Nav />
          <main>{children}</main>
        </div>
    );
}
