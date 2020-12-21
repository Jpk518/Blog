import makeStyles from '@material-ui/core/styles/makeStyles';

const cardStyles = makeStyles({
  root: {
    minWidth: '10vw',
    maxWidth: 400,
    minHeight: 500,
    border: 'none',
    // boxShadow: 'none',
    color: '#1b3c95', // #0053D6
    borderRadius: 5,
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  },
  workColor: {
    // background: '#FDE6F0',
    background: '#FEEACC',

  },
  projectColor: {
    // background: '#FDE6F0',
    background: '#FEEACC',
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
