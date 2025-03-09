import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import profile from '../assets/images/profile.png';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import share from '../assets/images/share.svg';
import like from '../assets/images/like.svg';
import './CardTwo.scss';


export const CardTwo = () => {
  return (
    <div>
    <Box className="container">
      <Box component={"div"} className="show-card">
        <Box component={"div"} className="show-card__wrapper">
          <Box component={"div"} className="show-card__header">
            <Box
              component={"img"}
              className="show-card__profileimage"
              src={profile}
              alt="profile image"
            />
            <Box component={"div"} className="show-card__info">
              <Typography component={"h1"} className="show-card__name">
                Michael Knight
              </Typography>
              <Typography component={"h2"} className="show-card__designation">
                Senior Developer
              </Typography>
            </Box>

            <Box component={"div"} className="show-card__socialmedia">
              <Box
                component={"img"}
                className="show-card__share"
                src={share}
                alt="share image"
              />
              <Box
                component={"img"}
                className="show-card__like"
                src={like}
                alt="like image"
              />
            </Box>
          </Box>
          <Box component={"div"} className="show-card__imagegroup">
            <Box
              component={"img"}
              className="show-card__img1"
              src={img1}
              alt="profile image"
            />
            <Box
              component={"img"}
              className="show-card__img2"
              src={img2}
              alt="profile image"
            />
            <Box
              component={"img"}
              className="show-card__img3"
              src={img3}
              alt="profile image"
            />
          </Box>
          <Box component={"div"} className="show-card__description">
            <Typography variant="h1" className="show-card__title">
              Reading Task
            </Typography>
            <Typography variant="h2" className="show-card__subtitle">
              Constructive and destructive waves
            </Typography>
            <Typography variant="h3" className="show-card__time">
              2 hours 40 minutes
            </Typography>
          </Box>

          <Button startIcon={<PlayArrowIcon />} className="show-card__playbtn">
            Play
          </Button>
        </Box>
      </Box>
    </Box>
    </div>
  );
};
