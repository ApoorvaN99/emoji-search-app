import emojiList from '../data/emojiList.json';

export default function filterEmoji(searchText, maxResults) {
  const filteredEmojis = emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase()))
        return true;
      if (emoji.keywords.toLowerCase().includes(searchText.toLowerCase()))
        return true;
      return false;
    })
    .slice(0, maxResults);

  return filteredEmojis;
}
