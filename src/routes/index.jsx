import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout/MainLayout'
import CampaignList from '../pages/CampaignList/CampaignList'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="/campaigns" replace />} />
      <Route path="campaigns" element={<CampaignList />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes