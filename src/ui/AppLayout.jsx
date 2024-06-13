import { Outlet, useNavigation } from "react-router-dom";
import Header from "../sections/Header";
import PageLoader from "./PageLoader";
import Footer from "../sections/Footer";
import PageEventListener from "../pages/PageEventListener";

function AppLayout() {
  const navigation = useNavigation();
  return (
    <>
      <PageEventListener />
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden">
        <Header />

        {navigation.state === "loading" && <PageLoader />}

        <main>
          <Outlet />
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default AppLayout;
