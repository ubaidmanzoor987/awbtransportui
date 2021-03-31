import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      bottom:0,
      position: 'absolute',
      textAlign:"center",
      justifyContent:"center",
      paddingLeft:"80px"
    },
  }),
);

type Props = {
    title?: string,
    active?: Boolean
}
export default function CircularIndeterminate(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {
            props.active ? 
            <div style={{textAlign:"center"}}>
                <CircularProgress/>
                <div>
                    {props.title}
                </div> 
            </div>
            :
            ""
        }
    </div>
  );
}