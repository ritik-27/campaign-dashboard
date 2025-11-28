import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout/MainLayout'
import CampaignList from '../pages/CampaignList/CampaignList'
import CampaignDetails from '../pages/CampaignDetails/CampaignDetails'
import Dashboard from '../pages/Dashboard/Dashboard'
import ComingSoon from '../pages/ComingSoon/ComingSoon'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="campaigns" element={<CampaignList />} />
      <Route path="campaigns/:id" element={<CampaignDetails />} />

      {/* Coming Soon */}
      <Route path="contacts" element={<ComingSoon />} />
      <Route path="broadcast" element={<ComingSoon />} />
      <Route path="analytics" element={<ComingSoon />} />
      <Route path="messages" element={<ComingSoon />} />
      <Route path="integrations" element={<ComingSoon />} />
      <Route path="settings" element={<ComingSoon />} />
      <Route path="security" element={<ComingSoon />} />
      <Route path="ideas" element={<ComingSoon />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes