// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '../../helpers/firebase';

export default async (req, res) => {
  const userRef = await firestore.collection('users').where('rfid', '==', req.query.rfid);
  const userSnapshot = userRef.get();
  const userData = userSnapshot.data();
  console.log(userData);
  res.status(200).json({ message: 'hellasdfasdlkfjo' });
}
