import {Account, Avatars, Client, Databases, ID} from "react-native-appwrite";

export const appwriteConfig={
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.enidev.aoura",
    projectId:"663cba65002ed8db2b6a",
    databaseId:"663cbcfb0039a3c6e408",
    userCollectionId:"663cbd85003cc8d1239f",
    videoCollectionId:"663cbdf9001222627f82",
    storageId:"663cbfce0022f418ce78"
}


const client=new Client();

client
.setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.platform)

const account=new Account(client);
const avatars=new Avatars(client);
const databases=new Databases(client);

export const createUser=async (email,password,userName)=>{

    // account.create(ID.unique(),"me@example.com",
    // "password","Jane")
    // .then(function(response){
    //     console.log(response)
    // }, function(error){
    //     console.log(error)
    // })
    try {
        const newAccount=await account.create(ID.unique(),email,password,userName)

        if(!newAccount) throw Error;

        const avatarUrl=avatars.getInitials(userName)

        await signIn(email,password);

        const newUser=await databases.createDocument(appwriteConfig.databaseId,appwriteConfig.userCollectionId,ID.unique(),{accountId:newAccount.$id,email,userName,avatar:avatarUrl})
        return newUser;
    } catch (error) {
        console.log(error)
        
    }
    throw new Error(error)
}

export  async function signIn (email,password,userName){

    try {
  const session=await account.createEmailPasswordSession(email,password)
  return session;
    } catch (error) {
        throw new Error(error)
        
    }
   
}
