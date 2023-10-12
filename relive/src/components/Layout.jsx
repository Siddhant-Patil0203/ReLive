import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="pt-5">{children}</main>
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
