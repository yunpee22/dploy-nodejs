import * as firebase from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const serviceAccount: any = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

const initFirebaseAppAndGetDB = () => {
  const app = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
  });
  return firebase.firestore(app);
};

const db = initFirebaseAppAndGetDB();

export default db;
