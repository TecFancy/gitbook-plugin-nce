
// Get url of audio or image.
function getUrl(block, type) {
  var url = '';
  var book = undefined;
  var src = block.kwargs.src;

  if (block.kwargs.book) book = block.kwargs.book;
  else book = undefined;

  if (src.includes('https://') && !book) {
    url = src;
  } else {
    if (type === 'audio') {
      url = `https://git.lug.ustc.edu.cn/smpower/nce${book}-aep/raw/master/${src}/`;
    } else if (type === 'image') {
      url = `https://git.lug.ustc.edu.cn/smpower/nce${book}-img/raw/master/${src}/`;
    } else return '';
  }

  return url;
}

module.exports = {
  blocks: {
    // audio block
    nceAudio: {
      process: function(block) {
        var elementStr = this.output.name === 'website' ?
          `
            <audio controls="controls">
              <source src=${getUrl(block, 'audio')} type="audio/mpeg" />
              <i>Your browser does not support the audio element.</i>
            </audio>
          `
        : null;

        return `<div class="NceBlock audio">${elementStr}</div>`;
      }
    },

    // image block
    nceImage: function(block) {
      var elementStr = this.output.name === 'website' 
        ? `<img src=${getUrl(block, 'image')} alt="Content image" />` 
        : null;

      return `<div class="NceBlock image">${elementStr}</div>`;
    }
  }
};
