import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "./config"

// Auth classF
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
        createUserWithEmailAndPassword(this.auth, email, password).then(userCredential => {
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
        await signInWithPopup(this.auth, provider)
            .then((result) => {
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
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
                console.log(error);
            });
    }
    signUpWithFacebook() {

    }
    signInWithGoogle(callBack: () => void) {
        const provider = new GoogleAuthProvider();

        signInWithPopup(this.auth, provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            callBack()
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
}

export default new Auth()