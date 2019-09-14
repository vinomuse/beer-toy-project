export interface TagItem {
  key: string;
  name: string;
  active: boolean;
}

export interface TagState {
  [x: string]: any;
  tagList: Array<TagItem>;
  isLoaded: boolean;
}