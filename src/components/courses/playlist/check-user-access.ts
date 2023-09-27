import { getCurrentUser } from "vuefire";
import sanityAPI from "../../../api/sanity";
import admin from "../../firebase/admin";

type Access = boolean

export default async function checkUserAccess(courseTitle: string) {
    // vuefires getCurrentUser
    const user = await getCurrentUser()
    const email = user?.email
    if (!email) return;

    // check user role
    const role = await admin.role(email)

    if (role === 'admin') {
        // admin have access to all page
        return true;
    } else {
        // sanity check access when user is not admin
        const data = await sanityAPI.readUserAccess(email, courseTitle)
        // if user have access return true otherwise false
        return data ? true : false
    }
}