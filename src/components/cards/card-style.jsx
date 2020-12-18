import makeStyles from '@material-ui/core/styles/makeStyles';

const cardStyles = makeStyles({
  root: {
    minWidth: '10vw',
    maxWidth: 400,
    minHeight: 500,
    border: 'none',
    boxShadow: 'none',
    background: '#fde6f0',
    color: '#1b3c95',
  },
  title: {
    fontSize: 14,
  },
  font: {
    fontFamily: 'Castoro',
  },
  sansFont: {
    fontFamily: 'Open Sans',
  },
});

export default cardStyles;
