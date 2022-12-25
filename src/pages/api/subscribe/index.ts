import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, phone } = req.body;

  console.log(email, name, phone, 'dados')

  if (req.method === 'POST') {
    try {
      await fauna.query(
        q.If(
          q.Not(
            q.Exists(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(email)
              )
            )
          ),
          q.Create(
            q.Collection('subscribe'),
            { data:  { email, name,  phone}}
          ),
          q.Get(
            q.Match(
              q.Index('user_by_email'),
              q.Casefold(email)
            )
          )
        )
      );

      return res.status(200).json({sucess: true});
    } catch (err) {
      res.status(404).json({error: err});
    } 
  }
}