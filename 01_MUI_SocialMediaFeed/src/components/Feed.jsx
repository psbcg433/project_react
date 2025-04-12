import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Box,
  styled,
} from "@mui/material";
import {
  MoreVert,
  ThumbUp,
  ChatBubbleOutline,
  Share,
} from "@mui/icons-material";

// Styled components
const PostCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  width: "100%",
  marginBottom: theme.spacing(3),
  boxShadow: "none",
  border: "1px solid #ddd",
  borderRadius: "8px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "680px",
    margin: "0 auto",
    marginBottom: theme.spacing(3),
  },
}));

const PostButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const StyledCardMedia = styled(CardMedia)({
  objectPosition: "center center",
  height: "400px",
  objectFit: "cover",
});

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState({});

  const handleLikeToggle = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const generatePosts = () => {
    const names = [
      "Alex Johnson",
      "Sam Wilson",
      "Taylor Swift",
      "Jamie Lee",
      "Morgan Freeman",
      "Dana Scully",
      "Jordan Peterson",
      "Casey Neistat",
      "Robin Williams",
      "Patty Jenkins",
    ];

    const texts = [
      "Just had the most amazing coffee at this new café downtown! ☕ #foodie",
      "Weekend vibes with my favorite people ❤️ #friends #weekend",
      "Working on something exciting! Can't wait to share it with you all 🚀",
      "Nature always helps me clear my mind. Beautiful hike today! 🏞️ #outdoors",
      "Throwback to this incredible concert last summer 🎵 #music #memories",
      "Just finished reading an amazing book. Highly recommend! 📚",
      "My new workspace setup is finally complete! #productivity #homeoffice",
      "Cooked this delicious meal today. Recipe in comments! 🍳 #homecooking",
      "Puppy cuddles are the best medicine after a long day 🐶 #dogsofinstagram",
      "Sunset views that take your breath away 🌅 #nature #photography",
    ];

    const times = [
      "Just now",
      "2 mins ago",
      "15 mins ago",
      "1 hr ago",
      "3 hrs ago",
      "Yesterday",
      "2 days ago",
      "Last week",
      "May 15",
      "April 30",
    ];

    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`,
      userName: names[i % names.length],
      postTime: times[Math.floor(Math.random() * times.length)],
      privacy: ["Public", "Friends", "Only me"][Math.floor(Math.random() * 3)],
      postText: texts[i % texts.length],
      postImage: `https://picsum.photos/seed/${Math.random()}/600/400`,
      likeCount: Math.floor(Math.random() * 1000).toLocaleString(),
      commentCount: Math.floor(Math.random() * 100),
      shareCount: Math.floor(Math.random() * 50),
    }));
  };

  const posts = generatePosts();

  return (
    <Box
      flex={4}
      p={2}
      sx={{
        height: "85vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",

      }}
    >
      {posts.map((post) => (
        <PostCard key={post.id}>
          <CardHeader
            avatar={<Avatar src={post.userAvatar} />}
            action={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
            title={post.userName}
            subheader={`${post.postTime} · ${post.privacy}`}
            sx={{ pb: 0 }}
          />

          <CardContent sx={{ py: 1, px: 2 }}>
            <Typography variant="body1">{post.postText}</Typography>
          </CardContent>

          {post.postImage && (
            <StyledCardMedia
              component="img"
              image={post.postImage}
              alt="Post content"
            />
          )}

          <CardActions sx={{ justifyContent: "space-around", py: 1 }}>
            <PostButton
              onClick={() => handleLikeToggle(post.id)}
              startIcon={
                <ThumbUp
                  sx={{ color: likedPosts[post.id] ? "blue" : "inherit" }}
                />
              }
              fullWidth
              sx={{ color: likedPosts[post.id] ? "blue" : "inherit" }}
              disableRipple
            >
              Like
            </PostButton>

            <PostButton
              startIcon={<ChatBubbleOutline />}
              fullWidth
              disableRipple
            >
              Comment
            </PostButton>
            <PostButton startIcon={<Share />} fullWidth disableRipple>
              Share
            </PostButton>
          </CardActions>
        </PostCard>
      ))}
    </Box>
  );
};

export default Feed;
