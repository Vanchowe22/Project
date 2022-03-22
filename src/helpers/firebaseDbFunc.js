import { ref, set } from "firebase/database"
import { db } from "../firebase"

export const createConvFirebase = (conv) => {
    console.log(conv);
    set(ref('https://xtra-blogs-default-rtdb.europe-west1.firebasedatabase.app/', '/conv'), conv);
}