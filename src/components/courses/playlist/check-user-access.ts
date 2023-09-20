import { getCurrentUser } from "vuefire";
import sanityAPI from "../../../api/sanity";
import admin from "../../firebase/admin";

type Access = boolean

export default async function checkUserAccess(courseTitle: string, callBack: (access: Access) => void) {
    // vuefires getCurrentUser
    await getCurrentUser().catch(err => { throw err }).then(user => {
        const email = user?.email
        if (!email) return;

        // check user role
        admin.role(email, role => {
            if (role === 'admin') {
                // admin have access to all page
                callBack(true)
            } else {
                // sanity check access when user is not admin
                sanityAPI.readUserAccess(email, courseTitle, (data: boolean) => {
                    if (data) {
                        callBack(true)
                    } else {
                        callBack(false)
                    }
                })
            }
        })
    })
}