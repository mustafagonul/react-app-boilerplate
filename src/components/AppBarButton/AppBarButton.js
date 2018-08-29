import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class AppBarButton extends Component {

  render() {
    const { text, link } = this.props;
  
    const onLink = props => <Link to={ link } {...props} />

    return (
      <div>
        <Button component={ onLink }>
          <Typography variant="subheading">
            { text }
          </Typography>
        </Button>
      </div>
    );
  }
}

export default AppBarButton;
