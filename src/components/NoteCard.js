import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({});
const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      {" "}
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton
              onClick={() => {
                handleDelete(note.id);
              }}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {" "}
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
