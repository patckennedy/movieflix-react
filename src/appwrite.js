import { Client, Databases, ID, Query } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    console.log('Updating search count for:', searchTerm, movie); // NEW
    try {
        // 1. Check if the searchTerm exists
        const result = await database.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.equal('searchTerm', searchTerm)]
        );

        console.log('Documents found:', result.documents.length); // NEW

        if (result.documents.length > 0) {
            // 2. Update count
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            });
        } else {
            // 3. Create new document
            await database.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    searchTerm,
                    count: 1,
                    movie_id: movie.id,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }
            );
            console.log('Document created:', res); // NEW
        }
    } catch (error) {
        console.error('Appwrite error:', error);
    }
};
