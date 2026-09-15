// Imports
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { HomePage, ShopPage, StaffPage, AccessPage } from "../pages"
import MainNavigation from "../components/shared/MainNavigation"

const AppRouting = () => {
  const AdministerUser = () => {
    const location = useLocation()
    const confirmedUser = location.pathname === "/"

    return (
      <>
        {!confirmedUser && <MainNavigation />}
        <Routes>
          <Route path="/" element={<AccessPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/staff" element={<StaffPage />}></Route>
        </Routes>
      </>
    )
  }

  return (
    <BrowserRouter>
      <AdministerUser />
    </BrowserRouter>
  )
}

// Exports
export default AppRouting
