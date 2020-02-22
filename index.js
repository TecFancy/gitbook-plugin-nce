var url = '';

module.exports = {
  blocks: {
    nce: {
      process: function(block) {
        var type = block.kwargs.type;
        var src = block.kwargs.src;
  
        if (src.includes('https://') && !block.kwargs.book) {
          url = src;
        } else {
          if (type === 'audio') {
            url = `https://git.lug.ustc.edu.cn/smpower/nce${block.kwargs.book}-aep/raw/master/${src}/`;
          } else if (type === 'image') {
            url = `https://git.lug.ustc.edu.cn/smpower/nce${block.kwargs.book}-img/raw/master/${src}/`;
          } else {
            url = '';
          }
        }

        var className = type === 'audio' ? 'NceBlock audio' : type === 'image' ? 'NceBlock image' : 'NceBlock';

        var elementStr = this.output.name === 'website' ?
          type === 'audio' ?
            `
              <audio controls="controls">
                <source src=${url} type="audio/mpeg" />
                <i>Your browser does not support the audio element.</i>
              </audio>
            `
          : type === 'image' ? `<img src=${url} />` : null
        : null;

        return `<div class=${className}>${elementStr}</div>`
      }
    }
  }
};
