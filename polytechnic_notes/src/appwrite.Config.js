import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite API endpoint
  .setProject("67b9769f0033365ffa52"); // Your Appwrite project ID

const databases = new Databases(client);

export { databases };
