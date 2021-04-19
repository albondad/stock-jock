// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '../../helpers/firebase';

export default async (req, res) => {
  try {

    const usersRef = await firestore.collection('users');
    const usersSnapshot = await usersRef.where('rfid', '==', req.query.rfid).get();

    if (usersSnapshot.size === 1) {
      usersSnapshot.forEach(async (userDoc) => {
        const user = await userDoc.data();
        res.status(200).json(user);
      })
    }
    else {
      res.status(200).json({message: 'there was no user found with that rfid'});
    }
  }
  catch (error) {
    // console.log(error)
    res.status(400).json({ message: 'there was an error' });
  }
}
