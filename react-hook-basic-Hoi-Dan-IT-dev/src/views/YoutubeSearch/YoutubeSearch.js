import "./YoutubeSearch.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyAe2PDAJ9EjbFtXfFPMsml1CQpN49MGFaw",
        type: "video",
        q: query,
      },
    });

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }

      setVideos(result);
    }
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="ifram-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">Author: {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "zeuCzKLu-wuQtldLHPDioh8KdsQ",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 342,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "WZVHL_Lko86s2GTzwj-5ssMyVTQ",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Wsxs9DoR3kM"
//         },
//         "snippet": {
//           "publishedAt": "2021-09-15T02:00:13Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#26 S??? D???ng Axios ????? G???i Request API t??? React.JS  | React C?? B???n Cho Beginners T??? A ?????n Z",
//           "description": "????? c?? th??? th???c hi???n m???t y??u c???u (request) t???i server backend, m???t c??ng c??? c???c k??? h???u ??ch khi s??? d???ng v???i React l?? AXIOS, m???t th?? vi???n gi??p ch??ng ta k???t n???i ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Wsxs9DoR3kM/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Wsxs9DoR3kM/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Wsxs9DoR3kM/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-15T02:00:13Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "sfbDdR_nh91-GCFhvbBgGbSHWKQ",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "3suCqcKEVu0"
//         },
//         "snippet": {
//           "publishedAt": "2021-09-13T11:15:14Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#23 Links &amp; NavLinks Trong React.JS Routers | React C?? B???n Cho Beginners T??? A ?????n Z",
//           "description": "Trong video n??y, ch??ng ta s??? c??ng nhau t??m hi???u c??ch s??? d???ng Links v?? NavLinks c???a React Router, t??? ?????y c?? th??? ??i???u h?????ng trang m?? kh??ng c???n 'reload' (t???i ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/3suCqcKEVu0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/3suCqcKEVu0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/3suCqcKEVu0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-13T11:15:14Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "5P0ARoF_WjxV4d3RypNFog0nX-g",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Rf6jZSapWE8"
//         },
//         "snippet": {
//           "publishedAt": "2021-10-23T12:00:11Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#15 JSON Server L???y Data Covid-19 | React Season 2 V???i Hook Cho Beginner T??? A ?????n Z",
//           "description": "JSON SERVER l?? m???t trong nh???ng c??ch ????n gi???n nh???t ????? client React c?? th??? truy c???p v?? l???y d??? li???u hi???n th???. Trong video n??y, ch??ng ta s??? c??ng nhau t??m hi???u ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Rf6jZSapWE8/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Rf6jZSapWE8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Rf6jZSapWE8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-10-23T12:00:11Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "_UeKhN9GpFY2SXmNTFMgRV_tc4c",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "6bdQezet-xE"
//         },
//         "snippet": {
//           "publishedAt": "2021-10-27T11:00:15Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#19.1 Th??? Th??ch Code FreeStyle Hook vs Class React | React Season 2 V???i Hook Cho Beginner T??? A ?????n Z",
//           "description": "Tr???i qua g???n 20 videos v??? React Hooks, th?? video n??y ch??nh l?? video ch??ng ta t???ng h???p l???i ki???n th???c ???? h???c, c??ng nh?? l??m m???t 'project con con', v???a h???c v???a ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/6bdQezet-xE/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/6bdQezet-xE/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/6bdQezet-xE/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-10-27T11:00:15Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "pND_bmckn83OiPaM-RSR9yYaGRE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "jRFArF9t63I"
//         },
//         "snippet": {
//           "publishedAt": "2021-10-20T11:00:13Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#9 React Developer Tools - S??? D???ng Tools v???i React | React Season 2 V???i Hook Cho Beginner T??? A ?????n Z",
//           "description": "Trong video n??y, ch??ng ta s??? c??ng nhau t??m hi???u c??ch c??i ?????t v?? s??? d???ng React Developer Tools, m???t c??ng c??? c???c k??? h???u ??ch ????? ki???m tra props, state hay th???m ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/jRFArF9t63I/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/jRFArF9t63I/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/jRFArF9t63I/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-10-20T11:00:13Z"
//         }
//       }
//     ]
//   }
