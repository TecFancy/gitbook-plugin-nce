var url = ''

module.exports = {
  blocks: {
    nce: {
      process: function(block) {
        var src = block.kwargs.src;
  
        if (src.includes('https://') && !block.kwargs.book) {
          url = src;
        } else {
          url = `https://git.lug.ustc.edu.cn/smpower/nce${block.kwargs.book}-aep/raw/master/${src}/`
        }

        var audioStr = this.output.name === 'website' ? `
          <audio controls="controls">
            <source src=${url} type="audio/mpeg" />
            <i>Your browser does not support the audio element.</i>
          </audio>
        ` : null

        return `
          <div className="NceBlock">
            ${audioStr}
          </div>
        `
      }
    }
  }
};
