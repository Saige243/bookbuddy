import Navbar from '../components/Navbar'
import { db } from '../firebase'
import { doc, addDoc, collection } from "firebase/firestore";


export default function Library(props: any): JSX.Element {

  // const createNote = async (note: any) => {
  //   await addDoc(collection(db, 'notes'), note)
  // }

  const schoolRef = db.collection('schools').doc('school1');
  async function getDocs() {
    await schoolRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
  }

  return (
    <div>
      <Navbar />
      <h1>My Library</h1>
      <h1>
        <button onClick={getDocs}>Click Me</button>
        {props.title}
        {props.authors}
      </h1>
    </div>
  )
}
