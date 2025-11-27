import { campaignsData } from '../data/campaignsData';

export const filterCampaigns = (campaigns, statusFilter) => {
  let filtered = campaigns;

  if (statusFilter && statusFilter !== 'All') {
    filtered = filtered.filter(campaign => campaign.status === statusFilter);
  }

  return filtered;
};

// Re-export campaignsData for convenience
export { campaignsData } from '../data/campaignsData';
