import React from "stilren/react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Material() {
  return (
    <div $background="#999" $minHeight="100vh" $padding="1em">
      <Paper $padding="1em">
        <Typography variant="h1">Material ui</Typography>
        <Typography variant="body1">
          You can as easily integrate stilren with a ui lib like{" "}
          <a href="https://material-ui.com/">Material-ui</a>.
        </Typography>
        <Button $color="red" $marginTop="2em">
          All components can be customized
        </Button>
      </Paper>
    </div>
  );
}
