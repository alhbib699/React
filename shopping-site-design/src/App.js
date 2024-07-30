import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import Register from "./Pages/Auth/Register";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrand from "./Pages/Brands/AllBrandPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";
import ProductDetailesPage from "./Pages/Products/ProductDetailesPage";
import CartPage from "./Pages/Cart/CartPage";
import PaymentMethodPage from "./Pages/Payment/PaymentMethodPage";
import AdminAllProductPage from "./Pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import UserAllOrderPage from "./Pages/User/UserAllOrderPage";
import UserFavouritePage from "./Pages/User/UserFavouritePage";
import UserAddressesPage from "./Pages/User/UserAddressesPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressePage from "./Pages/User/UserEditAddressePage";
import UserProfilePage from "./Pages/User/UserProfilePage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductPage />} />
          <Route path="/products/:id" element={<ProductDetailesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<PaymentMethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allproducts" element={<UserAllOrderPage />} />
          <Route path="/user/favourite" element={<UserFavouritePage />} />
          <Route path="/user/addresse" element={<UserAddressesPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressePage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
