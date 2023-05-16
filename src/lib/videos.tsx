import videoData from "../data/videos.json";

export const getCommonVideos = async (url: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";

    const response = await fetch(
      `https://${BASE_URL}${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    if (data?.error) {
      console.error("Youtube API error", data.error);
      return [];
    }
    return data.items.map((video: any) => {
      const id = video.id?.videoId || video.id;
      return {
        title: video.snippet.title,
        imgUrl: video.snippet.thumbnails.high.url,
        id,
      };
    });
  } catch (error) {
    console.error("something went wrong with video library", error);
    return videoData.items;
  }
};

export const getVideos = (searchQuery: string) => {
  const URL = `/search?part=snippet&q=${searchQuery}&type=video`;

  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TH";

  return getCommonVideos(URL);
};
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUTUBE_API_KEY]
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TH&key=[YOUR_API_KEY] HTTP/1.1
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=TH&key=[YOUR_API_KEY] HTTP/1.1
