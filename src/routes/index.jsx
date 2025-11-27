import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout/MainLayout'
import CampaignList from '../pages/CampaignList/CampaignList'
import CampaignDetails from '../pages/CampaignDetails/CampaignDetails'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="/campaigns" replace />} />
      <Route path="campaigns" element={<CampaignList />} />
      <Route path="campaigns/:id" element={<CampaignDetails />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes