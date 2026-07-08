import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	  apiKey: "AIzaSyDfOqFVUlh6HGUXvx6UvBl2k0WhHT2UQKU",
	    authDomain: "mzansi-legents.firebaseapp.com",
	      projectId: "mzansi-legents",
	        storageBucket: "mzansi-legents.firebasestorage.app",
	          messagingSenderId: "643152290146",
	            appId: "1:643152290146:web:5fd8ecec40f2ba5b74cc3b",
	            };

	            const app = initializeApp(firebaseConfig);

	            export const auth = getAuth(app);
	            
}
