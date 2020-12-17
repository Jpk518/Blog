import makeStyles from '@material-ui/core/styles/makeStyles';

const cardStyles = makeStyles({
  root: {
    minWidth: '10vw',
    maxWidth: 420,
    minHeight: 500,
    border: 'none',
    boxShadow: 'none',
    background: '#fde6f0',
    color: '#2253d6',
  },
  title: {
    fontSize: 14,
  },
  font: {
    fontFamily: 'Castoro',
  },
});

export default cardStyles;
