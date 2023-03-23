import { IStory } from "../../../../shared/models/IStory";
import { getImageUrl } from "../../../../shared/utils/utils";
import {
  ComicStoriesContainer,
  ComicStory,
  ComicStoryImage,
  ComicStoryTitle,
} from "../../styles/BuyComic.styles";

interface Props {
  series?: IStory[];
}

export default function ComicStories({ series }: Props) {
  return (
    <ComicStoriesContainer>
      {series?.map((story) => {
        return (
          <ComicStory key={story.id}>
            <ComicStoryImage
              src={getImageUrl(
                story.thumbnail.path + "." + story.thumbnail.extension
              )}
            />
            <ComicStoryTitle>{story.title}</ComicStoryTitle>
          </ComicStory>
        );
      })}
    </ComicStoriesContainer>
  );
}
