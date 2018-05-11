import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Autosuggest from 'react-autosuggest';
import { MenuItem, TextField, withStyles, Card, CardContent, Typography } from 'material-ui';

import Vessels from '../../api/vessels';

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function getPart(suggestion, start, end, highlight) {
  if (start && end && start > end) return {};
  return {
    text: suggestion.substring(start, end),
    highlight,
  };
}

function getSuggestionParts(suggestion, query) {
  const suggestedIndex = suggestion.toLowerCase().indexOf(query.toLowerCase());
  const suggestedEndIndex = suggestedIndex + query.length;
  return [
    getPart(suggestion, 0, suggestedIndex, false),
    getPart(suggestion, suggestedIndex, suggestedEndIndex, true),
    getPart(suggestion, suggestedEndIndex, undefined, false),
  ].filter(part => part.text && part.text.length !== 0);
}


const partStyles = () => ({
  text: {
    display: 'inline',
  },
});

const Part = ({ part, classes }) => {
  const options = part.highlight ? {
    text: part.text.toLowerCase(),
    color: 'inherit',
  } : {
    text: part.text.toUpperCase(),
    color: 'primary',
  };
  return (
    <Typography component="span" className={classes.text} color={options.color}>
      { options.text }
    </Typography>
  );
};

Part.propTypes = {
  part: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const PartStyles = withStyles(partStyles)(Part);

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const parts = getSuggestionParts(suggestion.name, query);
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => <PartStyles part={part} key={String(index)} />)}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <div {...containerProps}>
      {children}
    </div>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}


const styles = () => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  card: {
    overflow: 'visible',
    position: 'absolute',
    top: '10%',
    width: '50%',
    left: 0,
    right: 0,
    zIndex: 1,
    margin: 'auto',
  },
});

class VesselFindInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this);
    this.handleSuggestionsFetchRequested = this.handleSuggestionsFetchRequested.bind(this);
    this.handleSuggestionSelected = this.handleSuggestionSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: props.vesselSearch,
    };
  }

  handleSuggestionsFetchRequested() {
    this.props.onSearchUpdate(this.state.value);
  }

  handleSuggestionsClearRequested() {
    this.updateValue();
    this.props.onSearchUpdate('');
  }

  handleSuggestionSelected(event, { suggestionValue }) {
    this.props.onSelected(suggestionValue);
  }

  handleChange(event, { newValue }) {
    this.updateValue(newValue);
  }

  updateValue(value = '') {
    this.setState({ value });
  }

  render() {
    const { classes, vessels } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Autosuggest
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion,
            }}
            renderInputComponent={renderInput}
            suggestions={vessels}
            renderSuggestionsContainer={renderSuggestionsContainer}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              classes,
              placeholder: 'Enter a vessel name',
              value: this.state.value,
              onChange: this.handleChange,
            }}
            onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
            onSuggestionSelected={this.handleSuggestionSelected}
          />
        </CardContent>
      </Card>
    );
  }
}

VesselFindInput.propTypes = {
  vessels: PropTypes.array,
  vesselSearch: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onSearchUpdate: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
};

const StyledVesselFindInput = withStyles(styles)(VesselFindInput);

export default withTracker((props) => {
  const { vesselSearch } = props;
  if (!vesselSearch || vesselSearch.length === 0) {
    return {
      vessels: [],
    };
  }
  return {
    vessels: Vessels.find({ name: { $regex: new RegExp(vesselSearch, 'i') } }).fetch(),
  };
})(StyledVesselFindInput);
