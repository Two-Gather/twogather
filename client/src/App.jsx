import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import MyPage from "./pages/MyPage";
// import AddReview
import Notice from "./pages/Notice";
import AddNotice from "./pages/AddNotice";
import AdminHome from "./pages/AdminHome";
import AdminUserList from "./pages/AdminUserList";
import AdminBookList from "./pages/AdminBookList";
import AdminBookDetail from "./pages/AdminBookDetail";
import HostHome from "./pages/HostHome";
// import AddHost
// import AddSpace
import HostBookList from "./pages/HostBookList";
import HostSpaceList from "./pages/hostPage/HostSpaceList";
import HostUpdateSpace from "./pages/HostUpdateSpace";

import ProductList from "./pages/ProductList";
import Detail from "./pages/Detail";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App" style={{ overflowX: "hidden" }}>
        <BrowserRouter>
          <ScrollToTop />
          <Header></Header>
          {/* <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register/:userType" element={<RegisterForm />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/myPage/addReview" element={<AddReview />} />

            <Route path="/notice" element={<Notice />} />
            <Route path="/addNotice" element={<AddNotice />} />

            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/userList" element={<AdminUserList />} />
            <Route path="/admin/bookList" element={<AdminBookList />} />
            <Route
              path="/admin/bookList/bookDetail/:bookId"
              element={<AdminBookDetail />}
            />

            <Route path="/host" element={<HostHome />} />
            <Route path="/host/addHost" element={<AddHost />} />
            <Route path="/host/addSpace" element={<AddSpace />} />
            <Route path="/host/bookList" element={<HostBookList />} />
            <Route path="/host/spaceList" element={<HostSpaceList />} />
            <Route path="/host/updateSpace" element={<UpdateSpace />} />

            <Route path="/list/:searchInput" element={<ProductList />} />
            <Route path="/detail/:spaceId" element={<Detail />} />
            <Route path="/book" element={<Book />} />

            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
