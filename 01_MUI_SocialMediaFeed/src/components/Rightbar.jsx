import { 
  Box, 
  Stack, 
  Typography, 
  Avatar, 
  AvatarGroup,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  Chip
} from "@mui/material";
import React from "react";
import {
  Cake,
  Event,
  Groups,
  VideoLibrary,
  Bookmark,
  ExpandMore
} from "@mui/icons-material";

const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack gap={3}>
        {/* Online Friends */}
        <Box>
          <Typography variant="h6" fontWeight={600} mb={1}>Online Friends</Typography>
          <AvatarGroup max={6} sx={{ justifyContent: 'flex-start' }}>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=10" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=20" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=30" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/150?img=40" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Lucy Anderson" src="https://i.pravatar.cc/150?img=50" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Lucy Anderson" src="https://i.pravatar.cc/150?img=60" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Lucy Anderson" src="https://i.pravatar.cc/150?img=50" />
            </Badge>
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color="success">
              <Avatar alt="Lucy Anderson" src="https://i.pravatar.cc/150?img=50" />
            </Badge>
          </AvatarGroup>
        </Box>

        <Divider />

        {/* Upcoming Events */}
        <Box>
          <Typography variant="h6" fontWeight={600} mb={1}>Upcoming Events</Typography>
          <List dense sx={{ py: 0 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemAvatar>
                <Event color="primary" />
              </ListItemAvatar>
              <ListItemText 
                primary="Sarah's Birthday" 
                secondary="Tomorrow at 7:00 PM" 
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemAvatar>
                <Groups color="secondary" />
              </ListItemAvatar>
              <ListItemText 
                primary="College Reunion" 
                secondary="Sat, June 10" 
              />
            </ListItem>
          </List>
          <Button fullWidth startIcon={<ExpandMore />} sx={{ mt: 1 }}>
            See All
          </Button>
        </Box>

        <Divider />

        {/* Popular Groups */}
        <Box>
          <Typography variant="h6" fontWeight={600} mb={1}>Popular Groups</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            <Chip 
              icon={<VideoLibrary />} 
              label="Movie Buffs" 
              clickable
              variant="outlined"
            />
            <Chip 
              icon={<Bookmark />} 
              label="Book Club" 
              clickable
              variant="outlined"
            />
            <Chip 
              icon={<Cake />} 
              label="Food Lovers" 
              clickable
              variant="outlined"
            />
          </Stack>
        </Box>

        <Divider />

        {/* Birthday Section */}
        <Box>
          <Typography variant="h6" fontWeight={600} mb={1}>Birthdays</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Cake color="primary" />
            <Typography>
              <strong>Alex Johnson</strong> and <strong>2 others</strong> have birthdays today.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Rightbar;