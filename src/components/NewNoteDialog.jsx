import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class NewNoteDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { open, handleClose, handleSubmit } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Dodaj nową notatkę
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Nazwa notatki"
            fullWidth
            onChange={e => this.setState({ value: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={() => handleSubmit(this.state.value)} color="primary">
            Utwórz
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

NewNoteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default NewNoteDialog;
