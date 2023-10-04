export type Event = {
  city: string;
  country: string;
  description: string;
  end_date: string;
  event_url: string;
  expiry_date: string;
  id: number;
  fancy_id: string;
  image_url: string;
  name: string;
  start_date: string;
  supply: number;
  year: number;
}

export type CollectionData = {
  chain: string;
  created: string;
  event: Event;
  owner: string;
  tokenId: string;
}
