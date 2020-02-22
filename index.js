module.exports = {
  blocks: {
    nce: function(block) {
      var src = block.kwargs.src;
      var url = ''

      if (src.includes('https://')) {
        url = src;
      } else {
        url = `https://git.lug.ustc.edu.cn/smpower/${src}`
      }

      return {
        isAudio: this.output.name === 'website',
        url: url
      };
    }
  }
};
