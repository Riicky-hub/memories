import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    padding: '5px 0',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#3f50b5',
  },
  image: {
    marginLeft: '15px',
  },
}));
