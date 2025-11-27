import { campaignsData } from '../data/campaignsData';

export const filterCampaigns = (campaigns, searchTerm, statusFilter) => {
  let filtered = campaigns;

  if (searchTerm) {
    filtered = filtered.filter(campaign =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (statusFilter && statusFilter !== 'all' && statusFilter !== 'All') {
    filtered = filtered.filter(campaign => campaign.status === statusFilter);
  }

  return filtered;
};

export const getCampaignById = (id) => {
  return campaignsData.find(campaign => campaign.id === parseInt(id));
};

export { campaignsData } from '../data/campaignsData';
