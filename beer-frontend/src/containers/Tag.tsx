import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tag from 'components/Tag';
import { StoreState } from 'models';
import { TagItem } from 'models/tag';
import { fetchTagsRequest, toggleTag } from 'redux/actions/tag';
import { FetchTagsRequestAction, ToggleTagAction } from 'types/tag';

interface Props {
  tagList: Array<TagItem>;
  isLoaded: boolean;
  fetchTagsRequest(): FetchTagsRequestAction;
  toggleTag(name: string): ToggleTagAction;
}

export class TagContainer extends Component<Props, {}> {
  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.fetchTagsRequest();
    }
  }

  render() {
    const { handleToggle } = this;
    const { tagList } = this.props;
    return (
      <Tag 
        tagList={tagList}
        onToggle={handleToggle}
      />
    );
  }

  handleToggle = (name: string) => {
    this.props.toggleTag(name);
  }
}

export const connected = connect(
  ({ tag }: StoreState) => ({
    tagList: tag.tagList,
    isLoaded: tag.isLoaded
  }),
  { fetchTagsRequest, toggleTag }
)(TagContainer)