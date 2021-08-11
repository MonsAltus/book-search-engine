const { User, Book } = require('../models');
const {AuthenticationError} = require('apollo-server-express')

const resolvers = {
  Query: {

    
    // tech: async () => {
    //   return Tech.find({});
    // },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },

  },
  Mutation: {
    login: async (parent, args, context) => {
      if(context.user) {
        user
      }
      throw new AuthenticationError("User not logged in.")
    },

    createUser: async (parent, args, context) => {
      
    },

    deleteBook: async (parent, args, context) => {
      
    },

    saveBook: async (parent, args, context) => {
      
    },

    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },

  },
};

module.exports = resolvers;
