
const newLinkSubscribe = (parent , args, context, info) => {
  return context.db.subscription.link(
    // {
    //   where: { mutation_in: ['CREATED'] }
    // },
    { }, info)
}

const newVoteSubscribe = (parent, args, context, info) => {
  return context.db.subscription.votes(
    // {
    //   where: { mutation_in: ['CREATED'] }
    // },
    { }, info)
}

const newLink = {
  subscribe: newLinkSubscribe
}

const newVote = {
  subscribe: newVoteSubscribe
}

export default {
  newLink,
  newVote
}

