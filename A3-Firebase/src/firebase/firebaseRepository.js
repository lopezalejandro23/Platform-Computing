import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import {firestoreDb} from './firebaseConfigurations';


export const writeSongToFirestore = (songArtist, songTitle) => {

    // Organize the song artist and song title into an object

    const song= {
        songArtist, 
        songTitle
    };

    firebase.auth().onAuthStateChanged((user) => {
        if(user)
        {
            // Get the collection of Songs for the current user
            const songsCollection = firebaseDb.collection(`users/${user.uid}/songs`)

            // Add the song to a document in the songs collection and then log the document id
            songsCollection.add(song)
            .then((docRef) => console.log('Song Document ID: ', docRef.id))
            .catch((error)=> console.error('There was an error while writing a song to firestone ', error));

        }
    });


}