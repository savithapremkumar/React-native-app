
export default {
  // Functions return fixtures
  postAuth: (username, password) => {
    return {
      ok: true,
      data: require("../fixtures/auth.json")
    };
  },
  getPosts: userID => {
    if (userID === null) {
      return {
        ok: false,
        data: require("../fixtures/posts.json")
      };
    } else {
      return {
        ok: true,
        data: require("../fixtures/userposts.json")
      };
    }
  },
  getProposal: userID => {
    const proposalData = require("../fixtures/proposal.json");

    if (userID === null) {
     console.log('userid was null')
      return {
        ok: false,
        error: true
      };
    } else {
      return {
        ok: true,
        data: proposalData
      };
    }
  },
  putProposal: (userID, proposalData) => {
    if (userID === null) {
     console.log('userid was null')
      return {
        ok: false,
        error: true
      };
    } else {
      return {
        ok: true,
        data: proposalData
      };
    }
  }
};
