import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from "./config"

// Auth class
// Sign In + Sign Up
class Auth {
    auth = getAuth(app)
    constructor() { }
    /**
     * Validate `email` & `password` parameter before passing
     * 
     * @param email 
     * @param password 
     * @param callback 
     */
    signUp(email: string, password: string, callback: () => void, onError: (err: any) => void) {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            // Signed in
            // const user = userCredential.user
            callback()
            console.log(`Successfully signed up.`)
        }).catch(err => {
            onError(err)
            console.log(`Failed to sign up. `, err)
        })
    }
    /**
     * Validate `email` & `password` parameter before passing
     * 
     * @param email 
     * @param password 
     * @param callback 
     */
    signIn(email: string, password: string, callback: () => void, onError: (err: any) => void) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password).then(userCredential => {
            // Signed in
            // const user = userCredential.user
            callback()
            console.log(`Successfully signed in.`)
        }).catch(err => {
            onError(err)
            console.log(`Failed to sign in. `, err)
        })
    }
    /**
     * Return Firebase user instance
     * 
     * @returns 
     */
    observer(callBack: (user: any) => void) {
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                callBack({
                    uid: user.uid,
                    email: user.email
                })
            } else {
                // User is signed out
                // ...
            }
        })
    }
    signOut(callBack: () => void) {
        signOut(this.auth).then(() => {
            callBack()
            console.log(`Successfully signed out.`)
        }).catch((err) => {
            console.log(`Failed signed out. `, err)
        })
    }
}

export default new Auth()