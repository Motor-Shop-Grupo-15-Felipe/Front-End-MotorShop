import GlobalStyle from '../styles/global'

import { Route, Routes } from 'react-router-dom'

import Home from '../pages/home'
import Login from '../pages/login'
import Registration from '../pages/register'
import ProfileViewAdmin from '../pages/profileView'
import DetailedVehicle from '../pages/detailVehicle'

import { BannerHome } from '../components/bannerHome'

const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/registration" element={<Registration />} />

      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<ProfileViewAdmin />} />

      <Route
        path="/detailedVehicle/:vehicleId"
        element={<DetailedVehicle />}
      />

      <Route path="/banner" element={<BannerHome />} />
    </Routes>
  </>
)


export default Router
