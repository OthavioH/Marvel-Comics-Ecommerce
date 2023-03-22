import { IStory } from "../../../../shared/models/IStory";
import {
  ComicStoriesContainer,
  ComicStory,
  ComicStoryImage,
  ComicStoryTitle,
} from "../../styles/BuyComic.styles";

import placeholderImg from "../../../../assets/images/comic_placeholder.png";

interface Props {
  series?: IStory[];
}

export default function ComicStories({ series }: Props) {
  return (
    <ComicStoriesContainer>
      {series?.map((story) => {
        return (
          <ComicStory>
            <ComicStoryImage
              src={`${
                story.thumbnail
                  ? story.thumbnail.path + "." + story.thumbnail.extension
                  : placeholderImg
              }`}
            />
            <ComicStoryTitle>{story.title}</ComicStoryTitle>
          </ComicStory>
        );
      })}
    </ComicStoriesContainer>
  );
}
