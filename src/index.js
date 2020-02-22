const GitBook   = require('gitbook-core');
const { React } = GitBook;

/**
 * Block to render a nce audio.
 * @type {ReactClass}
 */
const NceBlock = React.createClass({
  propTypes: {
    isAudio: React.PropTypes.bool.isRequired,
    url: React.PropTypes.string.isRequired
  },

  render() {
    const { isAudio, url } = this.props;

    return (
      <div className="NceBlock">
        <GitBook.ImportCSS href="gitbook/nce/nce.css" />
        {
          isAudio ? (
            <audio controls="controls">
              <source src={url} type="audio/mpeg" />
              <i>Your browser does not support the audio element.</i>
            </audio>
          ) : null
        }
      </div>
    );
  }
});

module.exports = GitBook.createPlugin({
  activate: (dispatch, _getState, { Components }) => {
    dispatch(Components.registerComponent(NceBlock, { role: 'block:nce' }));
  }
});
