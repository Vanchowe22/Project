import { storage } from '../firebase';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        const fileName = file.name + '-' + Date.now();
        const storageRef = ref(storage, `images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            snapshot => { },
            error => {
                reject(error)
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        resolve(url);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        )
    })
}

export const deleteFile = (imageUrl) => {
    let deleteRef = ref(storage, imageUrl)
    return deleteObject(deleteRef);
}