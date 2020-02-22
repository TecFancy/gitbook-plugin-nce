module.exports = {
  blocks: {
    nce: function(block) {
      var audioId = block.kwargs.src;
      var bookVersion = block.kwargs.book;

      return {
        isAudio: this.output.name === 'website',
        url: `https://git.lug.ustc.edu.cn/smpower/nce${bookVersion}-aep/raw/master/${audioId}`
      };
    }
  }
};
