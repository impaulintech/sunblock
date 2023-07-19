interface CampaignCardProps {
  id?: number;
  imgSrc: string;
  title: string;
  description: string;
  additionalClass?: string;
  ethValue: number | string;
  daysLeft: number | string;
  toLink: string;
}

export default CampaignCardProps;
