import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'
import app, { firestore } from "../firebase/config.ts"
import { doc, getDoc, setDoc } from 'firebase/firestore'
import hashLibrary from 'short-unique-id'

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
        createUserWithEmailAndPassword(this.auth, email, password).then(userCredential => {
            // Signed in
            const user = userCredential.user
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
    signIn(email: string, password: string, callback: (user: any) => void, onError: (err: any) => void) {
        signInWithEmailAndPassword(this.auth, email, password).then(userCredential => {
            // Signed in
            const user = userCredential.user
            console.log(`Successfully signed in.`)
        }).catch(err => {
            onError(err)
            console.log(`Failed to sign in. `, err)
        })
    }
    /**
     * Return Firebase user instance
     * 
     * Will be called on each state change like login, logout
     * 
     * @returns 
     */
    observer(userExist: (user: any) => void, userNotExist?: () => void) {
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                // console.log(user);
                userExist({ uid: user.uid, email: user.email })
            } else {
                // User is signed out
                userNotExist && userNotExist()
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
    async signInWithFacebook() {
        const provider = new FacebookAuthProvider();

        await signInWithRedirect(this.auth, provider)
            .then((result: any) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential?.accessToken;

                console.log(result, credential);

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
                console.log(error);
            });
    }
    async signUpWithFacebook() {
        const provider = new FacebookAuthProvider();

        await getRedirectResult(this.auth)
            .then((result: any) => {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;

                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                // ...
            });
    }
    async signInWithGoogle(callBack: (user: any) => void) {
        const provider = new GoogleAuthProvider();

        await signInWithPopup(this.auth, provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
            callBack(user)
            this.setActiveDevice(user.uid)
            // console.log(result, credential);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error);
        });
    }
    /**
     * Return a promise 
     * 
     * If user exist in `onAuthStateChanged` call resolve and pass user as parameter
     * 
     * const user = await auth.currentUser();
     * 
     * @returns 
     */
    currentUser() {
        const currentUser = this.auth.currentUser

        return new Promise((resolve, reject) => {
            if (currentUser) {
                resolve(currentUser)
            }
            const unsubscribe = onAuthStateChanged(this.auth, (user: any) => {
                // I don't know the uses of this I have to learn more
                unsubscribe()

                resolve(user)
            }, reject)
        })
    }
    async setActiveDevice(uid: string) {
        const deviceId = this.generate_hash_for_device_id()

        const docRef = doc(firestore, 'active-device', uid)
        await setDoc(docRef, { deviceId, uid }).then(() => {
            // On saved deviceId to database
        }).catch(err => { console.log(err) })
    }
    async activeDevice(uid: string, redirectOnSignOut: () => void) {
        // Logged out current user if does not exist device on database
        // It will start on website load
        const docRef = doc(firestore, 'active-device', uid)
        await getDoc(docRef).then(data => {
            // Read device id
            const instance = data.data()

            if (instance) {
                const device = localStorage.getItem('deviceId')

                // Signed out if active deviceId does not match with currect deviceId
                if (device !== instance.deviceId) {
                    console.log(`localStorage: ${device}, firestore: ${instance.deviceId}`);
                    this.signOut(() => {
                        console.log('Signed out')
                        redirectOnSignOut()
                    })
                } else {
                    console.log(`Checking active device`);
                }
            }
        }).catch(err => { console.log(err) })
    }
    generate_hash_for_device_id(): string {
        const hash = new hashLibrary()
        const uniqueId = hash.rnd()
        localStorage.setItem("deviceId", uniqueId)
        // console.log(uniqueId);
        return uniqueId
    }
}

const auth = new Auth()

export default auth