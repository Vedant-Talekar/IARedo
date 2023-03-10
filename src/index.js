import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai'; 



import {initializeApp} from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, getDoc, query,
  where, updateDoc, 
} from 'firebase/firestore'

import { 
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged

} from 'firebase/auth'
import { func } from 'prop-types';
import { useState } from 'react';




const firebaseConfig = {
  apiKey: "AIzaSyCMCGcBHZ8z9nw9vZYKyJUySy-dBsFaGiY",
  authDomain: "newfireproject-ecc03.firebaseapp.com",
  projectId: "newfireproject-ecc03",
  storageBucket: "newfireproject-ecc03.appspot.com",
  messagingSenderId: "994706352537",
  appId: "1:994706352537:web:ec16c749841e90b4b74b08"
};

//initializing the database
initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

//collection reference
const colRef = collection(db, 'users')

// queries
 const q = query(colRef, where("title", "==", "staff"))


//real time data collection 
  onSnapshot(colRef, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
    })
    console.log(users)
  }) 

  //errors
  .catch (err =>{
    console.log(err.message)
  })

  // adding docs
const addUserForm = document.querySelector('.add')
addUserForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addUserForm.title.value,
    name: addUserForm.name.value,
  })
  .then(() => {
    //empties the form
    addUserForm.reset()
  })
})

// deleting documents
const deleteUserForm = document.querySelector('.delete')
deleteUserForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'users', deleteUserForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteUserForm.reset()
    })
})

//obtaining single documents
//const docRef = doc(db, 'users', )

// updating a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let docRef = doc(db, 'users', updateForm.id.value)

  updateDoc(docRef, {
    title: 'updated title'
  })
  .then(() => {
    updateForm.reset()
  })
})

// notifications for login/logout changes
// we can use this to alert the manager of anychanges
onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user)
}) 

// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })

    
    .catch(err => {
      console.log(err.message)
    })
})


/* IMPORTANT, NEW*/

function gradient(){
  const style = {
    bg: 'h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]'
  }
}

function Crud() {
  const [orders, setOrders] = useState()

  return(
      <div className={style.bg}>
        <div className={style.container}>
          <h3 className={style.heading}>Store CRUD</h3>
          <form className={style.form}>
            <input className={style.input} type="text" placeholder='Enter product' />
            <button className={style.button}> <AiOutlinePlus size={30}/> </button>
          </form>

          <ul>

          </ul>
        </div>
    </div>
  );
}

