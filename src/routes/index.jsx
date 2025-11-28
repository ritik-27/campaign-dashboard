import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout/MainLayout'
import CampaignList from '../pages/CampaignList/CampaignList'
import CampaignDetails from '../pages/CampaignDetails/CampaignDetails'
import Dashboard from '../pages/Dashboard/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="campaigns" element={<CampaignList />} />
      <Route path="campaigns/:id" element={<CampaignDetails />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes