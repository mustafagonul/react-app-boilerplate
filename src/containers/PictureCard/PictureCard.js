import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';

import RadioButtons from '../RadioButtons/RadioButtons';

const styles = theme => ({
  card: {
    display: 'flex',
		flexDirection: 'column',
	  alignItems: 'center',
	  justifyContent: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
	  alignItems: 'center',
	  justifyContent: 'center',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
		width: 500,
		height: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
					<IconButton aria-label="Previous">
						{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
					</IconButton>
					<CardMedia
						className={classes.cover}
						image="/static/images/cards/live-from-space.jpg"
					/>
					<IconButton aria-label="Next">
						{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
					</IconButton>
        </div>
				<RadioButtons />
      </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);

