import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// const config = {
//   apiKey: "AIzaSyBcF_ksZnSl8Z87kRi0qyom-UvpO5HGdDM",
//   authDomain: "pkbm-hanuba.firebaseapp.com",
//   databaseURL: "https://pkbm-hanuba.firebaseio.com",
//   projectId: "pkbm-hanuba",
//   storageBucket: "pkbm-hanuba.appspot.com",
//   messagingSenderId: "502022356926",
//   appId: "1:502022356926:web:2a0a1646e02093e85603ef",
//   measurementId: "G-R2TE2SVFK8"
// };


const config = {
  apiKey: "AIzaSyBickfif2rmnNHhjCyKyg2URHofqpszlwY",
  authDomain: "websklpkbm.firebaseapp.com",
  projectId: "websklpkbm",
  storageBucket: "websklpkbm.appspot.com",
  messagingSenderId: "674237208862",
  appId: "1:674237208862:web:4b47171daa4f4a2a20510f"
};

firebase.initializeApp(config);


export const deletedata = (collection, document) => {
  firestore.collection(collection).doc(document).delete()
};

// const samplereaddata =  () => {
//   const fetchData = async () => {
//     const db = firebase.firestore()
//     const data = await db.collection('nama collection').get()
//     setdata(data.docs.map(doc => ({...doc.data(), id:doc.id } )))
//     // console.log(data.docs.map(doc => ({...doc.data(), id:doc.id } )))
//   }
//   fetchData()}

// const realtimeread = ()=>{
//   React.useEffect(() => {
//     firestore.collection('nama collection')
//     .onSnapshot((snapshot)=>{
//       const data = snapshot.docs.map((doc)=>({
//         id: doc.id,
//         ...doc.data()
//       }))
//       setdata(data)
//     })
//   }, [refresher])
// }

// 

export const hapuspengguna = () => {
  const user = firebase.auth().currentUser;

  user.delete().then(function () {
    alert('berhasil dihapuss')
  }).catch(function (error) {
    alert('gagal menghapus')
  });
}

export const adddata = (collection, data) => {
  // Add a new document with a generated id.
  firestore.collection(collection).add({
    ...data
  })
  // .then(function (docRef) {
  //   alert(docRef)
  // })
  // .catch(function (error) {
  //   alert(error)
  // });
}



export const adddatacustomid = (collection, id, data) => {
  firestore.collection(collection).doc(id).set(data);
}

export const updatedatacustomid = (collection, id, data) => {
  firestore.collection(collection).doc(id).update(data)
}

export const updatedata = (collection, documentid, data) => {
  firestore.collection(collection).doc(documentid).set({
    ...data
  })

}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database;
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export const createuserviaemailandpassword = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ...
  });
}

export const signinviaemailandpassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    alert("wrong credential");
    // ...
  });
}

export const signoutuser = () => {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
}

export const cekuserdansubcribe = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });

}

export const cekuser = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      return true
    } else {
      return false
    }
  })
}

export default firebase;