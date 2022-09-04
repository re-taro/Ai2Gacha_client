export type Item = {
  id: string;
  item_status: string;
  event_id: string;
  name: string;
  image_url: string;
  holder_user_id: string;
  item_kind: string;
  ticket_status: boolean;
  board_status: string;
  board_id: string;
  wanted_item_kind: string;
  like_theme: string;
  post_point: string;
  apply_point: string;
  apply_number: number;
  point_vector: Array<number>;
  score: number;
};
