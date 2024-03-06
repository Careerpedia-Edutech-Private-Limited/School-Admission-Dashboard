import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar"

const layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
    </>
  );
};

export default layout;