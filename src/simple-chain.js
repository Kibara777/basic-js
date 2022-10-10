const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      this.chain.push(`${value}`);
      return this;
    },
    removeLink(position) {
      if (position < 1 || !this.chain[position - 1]) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
      return this;
    },
    reverseChain() {
      this.chain = this.chain.reverse();
      return this;
    },
    finishChain() {
      const currentChain = [...this.chain];
      this.chain = [];
      if (currentChain.length) {
        return `( ${currentChain.join(' )~~( ')} )`;
      } else {
        return '';
      }
  }
};

module.exports = {
  chainMaker
};
