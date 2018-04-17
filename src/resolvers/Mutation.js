import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { APP_SECRET, getUserId  } from '../utils'

class Mutation {
  static async signup(parent, args, context, info) {
    const password = await bcrypt.hashSync(args.password, 10)
  
    const user = await context.db.mutation.createUser({
      data: { ...args, password },
    }, `{ id }`)
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      token,
      user
    }
  }

  static async login(parent, args, context, info) {
    const user = await context.db.query.user({
      where: {
        email: args.email
      }
    }, ` { id password } `)
  
    if(!user) {
      throw new Error('No such User')
    }
  
    const valid = bcrypt.compareSync(args.password, user.password)
    if(!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      user,
      token
    }
  }

  static async post(parent, args, context, info) {
    const userId = getUserId(context)
    return context.db.mutation.createLink(
      {
        data: {
          url: args.url,
          description: args.description,
          postedBy: { connect: { id: userId } },
        },
      },
      info,
    )
  }
  static async vote(parent, args, context, info) {
    const userId = getUserId(context)
    console.log("@@@@@@@@@@@@@@@@@@@@@@@", userId)
    const linkExists = await context.db.exists.Vote({
      user: { id: userId },
      link: { id: args.linkId }
    })
    if(linkExists) {
      throw new Error(`Already voted for link: ${args.linkId}`)
    }
    return context.db.mutation.createVote(
      {
        data: {
          user: { connect: { id: userId } },
          link: { connect: { id: args.linkId } },
        },
      },
      info,
    )
  }
}

const { signup, login, post, vote } = Mutation
  
export default {
  signup,
  login,
  post,
  vote
}