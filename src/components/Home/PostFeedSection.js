import PostModal from "../Post/Modal";
import { useGetPosts } from "../../hooks/posts.hook";
import { useState } from "react";
function PostFeedSection() {
   const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const { isLoading, data } = useGetPosts()
  const posts = [
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer at XYZ Corp",
      postTitle: "My thoughts on the latest tech trends",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 15,
      comments: 30,
      tags: ["tech", "trends", "software", "development"],
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Manager at ABC Inc",
      postTitle: "Tips for creating engaging social media content",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 8,
      comments: 1,
      tags: ["tech", "trends", "software", "development"],
    },
    {
      id: 3,
      name: "Bob Johnson",
      title: "Project Manager at LMN Corp",
      postTitle: "How to manage remote teams effectively",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 12,
      comments: 5,
      tags: ["tech", "trends", "software", "development"],
    },
    {
      id: 4,
      name: "Jane Smith",
      title: "Marketing Manager at ABC Inc",
      postTitle: "Tips for creating engaging social media content",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 8,
      comments: 1,
      tags: ["tech", "trends", "software", "development"],
    },
    {
      id: 5,
      name: "Bob Johnson",
      title: "Project Manager at LMN Corp",
      postTitle: "How to manage remote teams effectively",
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lacinia ex eget mollis. Nam pulvinar lacus eu eros accumsan feugiat.",
      likes: 12,
      comments: 5,
      tags: ["tech", "trends", "software", "development"],
    },
  ];

  return (
    <div className="">
      <PostModal />
      {/* Title */}
      <h3 className="text-lg font-semibold text-blue-600 mb-4">Your Feed</h3>

      {/* Post Cards */}
      <div className="grid grid-cols-1 gap-4 overflow-y-scroll h-[90vh]  ">
        {!isLoading ? posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              {/* Profile Image */}
              <img
                src="https://via.placeholder.com/150"
                alt={post.name}
                className="rounded-full h-8 w-8 object-cover mr-2"
              />

              {/* Name and Title */}
              <div>
                <h4 className="text-base font-semibold text-gray-600">
                  {post.name}
                </h4>
                <p className="text-sm text-gray-500">{post.title}</p>
              </div>
            </div>

            {/* Post Title */}
            <h5 className="text-base font-semibold text-gray-700 mb-2">
              {post.postTitle}
            </h5>

            {/* Post Description */}
            <p className="text-sm text-gray-600 mb-4">{post.postDescription}</p>

            {/* Likes and Comments */}
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">
                <button onClick={handleFavoriteClick} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={isFavorite ? "#e71f1f" : "#d7d2dd"}
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />{" "}
                  </svg>

                  {post.likes}
                </button>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />{" "}
                </svg>
                {post.comments}
              </span>
            </div>

            {/* Comment Section */}
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10">
                  <img
                    src="https://source.unsplash.com/random/400x400"
                    alt="User"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Write a comment..."
                    className="w-full border border-gray-200 rounded-md p-2"
                  ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Post
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {/* Comment Card */}
                <div className="flex space-x-4">
                  <div className="w-10 h-10">
                    <img
                      src="https://source.unsplash.com/random/401x401"
                      alt="User"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 p-2 bg-gray-100 rounded-md">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-600">John Doe</span>
                      <span className="text-gray-700 text-xs">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas modi debitis dolore voluptatem quidem tempore nam
                      quae aperiam. Modi expedita eum unde fuga debitis saepe
                      nobis itaque, ea aspernatur recusandae?
                    </p>
                  </div>
                </div>

                {/* Comment Card */}
                <div className="flex space-x-4">
                  <div className="w-10 h-10">
                    <img
                      src="https://source.unsplash.com/random/402x402"
                      alt="User"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 p-2 bg-gray-100 rounded-md">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-600">Jane Doe</span>
                      <span className="text-gray-700 text-xs">5 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas modi debitis dolore voluptatem quidem tempore nam
                      quae aperiam. Modi expedita eum unde fuga debitis saepe
                      nobis itaque, ea aspernatur recusandae?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center text-gray-500 text-xl font-bold">
            Loading...
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default PostFeedSection;